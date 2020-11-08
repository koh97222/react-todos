import React, { useState, useEffect, useRef } from "react";
import WrapButton from "../components/WrapButton";
import WrapOutlinedTextField from "../components/WrapOutlinedTextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import WrapDataTable from "../components/WrapDataTable";
import WrapAlert from "../components/WrapAlert";

/**
 * TodoPage
 * ToDo画面のコンポーネント
 */
const TodoPage = () => {
  const classes = useStyles();
  const initValue: string = "";
  // エラー状態を同期的に判定したいため、追加（useStateは非同期なので・・）
  // TODO: もっとよいやり方はないか。。イケてない・・
  let hasErr: boolean = false;
  const [todo, setValue] = useState(initValue);
  const [err, addErr] = useState<string[]>([]);
  const [todos, addTodo] = useState<object[]>([]);
  const divRef = useRef(null);

  useEffect(() => {
    setValue(initValue);
  }, [todos, err]);

  /**
   * validate
   * 【条件】空文字でなく、50字未満であること。
   * @returns {boolean}
   * @param {string} todo
   */
  const validate = (todo: string) => {
    if (todo === "") {
      const errMsg = "文字を入力してください。";
      addErr((prevErr) => {
        hasErr = true;
        return [...prevErr, errMsg];
      });
    }
    if (todo.length > 50) {
      const errMsg = "50字未満で入力してください。";
      addErr((prevErr) => {
        hasErr = true;
        return [...prevErr, errMsg];
      });
    }
    console.log(err.length);
    const isValid = err.length === 0;
    return isValid;
  };

  /**
   * onclick 登録ボタン押下時
   * 入力チェックを行い、条件に合う場合todoを追加する。
   * @param todo
   * @param todos
   */
  const onClick = (todo: string, todos: object[]) => {
    // 初期化
    addErr(() => {
      hasErr = false;
      return [];
    });

    if (validate(todo) && !hasErr) {
      let id = todos.length + 1;
      addTodo((prevTodos) => {
        return [...prevTodos, { id, todo }];
      });
    }
  };

  return (
    <>
      <h2>React ToDoアプリ</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <form className={classes.form}>
            <WrapOutlinedTextField
              id={"content"}
              label={"Todoを入力"}
              helperText={"やりたいことを入力しましょう♪"}
              value={todo}
              setValue={(e) => {
                setValue(e);
              }}
            ></WrapOutlinedTextField>
            <WrapButton
              title={"登録"}
              click={() => {
                onClick(todo, todos);
              }}
            />
          </form>
        </Grid>

        <Grid item xs={12} sm={12}>
          <WrapAlert ref={divRef} msg={err} title={"error"}></WrapAlert>
        </Grid>

        <Grid item xs={12} sm={12}>
          <WrapDataTable
            height={500}
            columns={columns}
            rows={Object.values(todos)}
            width={"100%"}
          ></WrapDataTable>
        </Grid>
      </Grid>
    </>
  );
};

// /**
//  * regist
//  * Todoリストの登録
//  */
// const regist = (todos: Object[]) => {
//   /**
//    * 入力したTodo
//    * ※注意：tsxファイル化では、document.getElementById('hoge'),valueはできない。
//    * document.getElementById(‘hoge’);の戻り値は、HTMLElement型で、この型のインターフェースにはvalueプロパティは存在しない
//    * HTMLElement型を継承したHTMLTextAreaElement型にはvalueプロパティが存在するので、castする必要がある。
//    * @see https://stackoverflow.com/questions/12686927/typescript-casting-htmlelement
//    */
//   const input: string = (document.getElementById(
//     "content"
//   ) as HTMLTextAreaElement).value;
//   todos.push({ input });
//   console.log(todos);
// };

// テーブルのカラムを用意
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "todo", headerName: "Todo", width: 800 },
];

/**
 * style
 */
const useStyles = makeStyles({
  form: {
    marginTop: 200,
  },
  btn: {
    marginLeft: 20,
  },
});

export default TodoPage;
