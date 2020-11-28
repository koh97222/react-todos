import React from "react";
import { Game } from "../components/Game";
import { makeStyles } from "@material-ui/core";

/**
 * 三目並べゲーム
 * React tutorial
 * @see https://ja.reactjs.org/tutorial/tutorial.html#wrapping-up
 */
const TicTacToe = () => {
  const classses = useStyle();
  return (
    <>
      <h2 className={classses.title}>三目並べゲーム</h2>
      <div className={classses.main}>
        <Game />
      </div>
    </>
  );
};

const useStyle = makeStyles({
  title: {
    textAlign: "center",
  },
  main: {
    display: "flex",
    justifyContent: "center",
  },
});

export default TicTacToe;
