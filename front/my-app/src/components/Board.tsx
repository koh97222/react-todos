import React from "react";
import { Square } from "../components/Square";
import { makeStyles } from "@material-ui/core";

interface BoardProps {
  onClick(i: number): void;
  square: any;
}
/**
 * 三目並べを表示するコンポーネント
 */
export const Board = (props: BoardProps) => {
  const classes = useStyles();
  const renderSquare = (i: number) => {
    return <Square value={props.square[i]} onClick={() => props.onClick(i)} />;
  };
  return (
    <div>
      {/* <div className={classes.status}>{status}</div> */}
      <div className={classes.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={classes.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={classes.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  status: {
    marginBottom: "10px",
  },
  boardRow: {
    "&:after": {
      clear: "both",
      content: "",
      display: "table",
    },
  },
});
