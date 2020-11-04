import React, { useState } from "react";
import WrapButton from "./components/WrapButton";
import WrapOutlinedTextField from "./components/WrapOutlinedTextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import WrapDataTable from "./components/WrapDataTable";

/**
 * TodoPage
 * ToDo画面のコンポーネント
 */
const TodoPage = () => {
  const classes = useStyles();
  const [todo, setValue] = useState("");
  const [todos, addTodo] = useState<object[]>([]);

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
                let id = todos.length + 1;
                addTodo([...todos, { id, todo }]);
              }}
            />
          </form>
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
