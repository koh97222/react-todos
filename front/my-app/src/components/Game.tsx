import React from "react";
import { Board } from "../components/Board";
import { makeStyles } from "@material-ui/core";

export const Game = () => {
  const classes = UseStyle();
  return (
    <div className={classes.game}>
      <div className="game-board">
        <Board />
      </div>
      <div className={classes.gameInfo}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

const UseStyle = makeStyles({
  game: {
    display: "flex",
    flexDirection: "row",
  },
  gameInfo: {
    marginLeft: "20px",
  },
});
