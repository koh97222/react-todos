import React, { useState } from "react";
import { Square } from "../components/Square";
import { makeStyles } from "@material-ui/core";

/**
 * 三目並べを表示するコンポーネント
 */
export const Board = () => {
  const classes = useStyles();
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  const handleClick = (i: number) => {
    // 現在の配列を直接変更する代わりに、
    // .slice() メソッドを使って square 配列のコピーを作成し、それを変更する。
    // immutability; 不変性 ⇔ mutate; 書き換え
    // 利点
    // 1.複雑な機能が簡単に実装できる
    // 直接的なデータのミューテートを避けることで、ゲームの以前のヒストリをそのまま保って後で再利用することができるようになります。
    // 2.変更の検出がしやすい
    // 参照が変わるから。
    //
    const Squares = squares.slice();
    if (CalculateWinner(Squares) || Squares[i]) {
      return;
    }
    Squares[i] = xIsNext ? "X" : "◯";
    setSquares(Squares);
    setXIsNext(!xIsNext);
  };

  /**
   * ゲーム勝者の判定
   * @param squares
   */
  const CalculateWinner = (squares: Array<number>) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      const aligned =
        squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
      if (aligned) {
        return squares[a];
      }
    }
    return null;
  };
  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = "winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "◯");
  }

  return (
    <div>
      <div className={classes.status}>{status}</div>
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

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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
