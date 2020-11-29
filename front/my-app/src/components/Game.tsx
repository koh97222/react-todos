import React, { useState } from "react";
import { Board } from "../components/Board";
import { makeStyles } from "@material-ui/core";

export const Game = () => {
  const classes = UseStyle();
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const current = history[history.length - 1];

  const winner = CalculateWinner(current.squares);
  let status;
  if (winner) {
    status = "winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "◯");
  }

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
    const squares = current.squares.slice();
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "◯";
    setHistory(history.concat({ squares: squares }));
    setXIsNext(!xIsNext);
  };
  return (
    <div className={classes.game}>
      <div className="game-board">
        <Board
          square={current.squares}
          onClick={(i: number) => {
            handleClick(i);
          }}
        />
      </div>
      <div className={classes.gameInfo}>
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

/**
 * ゲーム勝者の判定
 * @param squares
 */
const CalculateWinner = (squares: Array<number>) => {
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

const UseStyle = makeStyles({
  game: {
    display: "flex",
    flexDirection: "row",
  },
  gameInfo: {
    marginLeft: "20px",
  },
});
