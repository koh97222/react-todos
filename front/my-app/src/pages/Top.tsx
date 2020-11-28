import React from "react";
import WrapCard from "../components/WrapCard";
import { makeStyles, Grid } from "@material-ui/core";

/**
 * Top画面コンポーネント
 */
const Top = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <h2>Top画面</h2>
        <p>React サンプルアプリ</p>
      </div>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <WrapCard
            title="天気予報アプリ"
            description="OpenWeatherMap APIを用いた天気予報アプリです。"
            path="/weather"
            image="weather"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <WrapCard
            title="Todoアプリ"
            description="Todoアプリです。"
            path="/todo"
            image="todo"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <WrapCard
            title="三目並べ"
            description="三目並べゲームです。"
            path="/tictactoe"
            image="user"
          />
        </Grid>
      </Grid>
    </>
  );
};

/**
 * style
 */
const useStyles = makeStyles({
  header: {
    textAlign: "center",
    marginBottom: "100px",
  },
});
export default Top;
