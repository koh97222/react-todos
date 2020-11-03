import React, { useState } from "react";
import WrapButton from "./components/WrapButton";
import WrapOutlinedTextField from "./components/WrapOutlinedTextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

/**
 * TodoPage
 * ToDo画面のコンポーネント
 */
const TodoPage = () => {
  const classes = useStyles();
  const todos: string[] = [];
  // todosをuseStateで管理したほうがよい・・？
  // const [todos, addTodo] = useState<string[]>([]);

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
            ></WrapOutlinedTextField>
            <WrapButton
              title={"登録"}
              click={() => {
                regist(todos);
              }}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
    </>
  );
};

/**
 * regist
 * Todoリストの登録
 */
const regist = (todos: string[]) => {
  /**
   * 入力したTodo
   * ※注意：tsxファイル化では、document.getElementById('hoge'),valueはできない。
   * document.getElementById(‘hoge’);の戻り値は、HTMLElement型で、この型のインターフェースにはvalueプロパティは存在しない
   * HTMLElement型を継承したHTMLTextAreaElement型にはvalueプロパティが存在するので、castする必要がある。
   * @see https://stackoverflow.com/questions/12686927/typescript-casting-htmlelement
   */
  const input = (document.getElementById("content") as HTMLTextAreaElement)
    .value;
  todos.push(input);
  console.log(todos);
};

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
