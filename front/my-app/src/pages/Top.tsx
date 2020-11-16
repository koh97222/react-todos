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
        <Grid item xs={4} sm={4}>
          <WrapCard
            title="天気予報アプリ"
            description="OpenWeatherMap APIを用いた天気予報アプリです。"
            path="/weather"
            image="/front/my-app/public/italy-1587287_640.jpg"
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <WrapCard
            title="Todoアプリ"
            description="Todoアプリです。"
            path="/todo"
            image="/front/my-app/public/old-1130743_640.jpg"
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <WrapCard
            title="User画面"
            description="鋭意作成中"
            path="/user"
            image="/front/my-app/public/sparkler-677774_640.jpg"
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
