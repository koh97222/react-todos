import React from "react";
import { Square } from "../components/Square";
import { makeStyles } from "@material-ui/core";

interface BoardProps {
  onClick(i: number): void;
  square: any;
  isWin: boolean[];
}
/**
 * 三目並べを表示するコンポーネント
 */
export const Board = (props: BoardProps) => {
  const classes = useStyles();
  const renderSquare = (i: number) => {
    return (
      <Square
        isWin={props.isWin[i]}
        key={i}
        value={props.square[i]}
        onClick={() => props.onClick(i)}
      />
    );
  };

  // Board でマス目を並べる部分を、ハードコーディングではなく 2 つのループを使用するように書き換える。
  const row = (row: number, loop: number) => {
    let els: JSX.Element[] = Array(loop).fill(null);
    let start = row * loop;
    for (let i = start; i < start + loop; i++) {
      let tmp = renderSquare(i);
      els[i] = tmp;
    }
    return (
      <div key={row} className={classes.boardRow}>
        {els}
      </div>
    );
  };

  const makeTable = (loop: number) => {
    let table: JSX.Element[] = [];
    for (let i = 0; i < loop; i++) {
      table = table.concat(row(i, loop));
    }
    return table;
  };
  return <div>{makeTable(3)}</div>;
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
