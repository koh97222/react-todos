import React, { useState } from "react";
import { Board } from "../components/Board";
import { makeStyles } from "@material-ui/core";

export const Game = () => {
  const classes = UseStyle();
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const isWins = Array(9).fill(false) as boolean[];

  const winner = CalculateWinner(current.squares);
  let status;
  if (winner) {
    status = "winner: " + winner.squares;
    // どちらかが勝利した際に、勝利につながった3つのマス目をハイライトする。
    winner.line.forEach((idx: number) => {
      isWins[idx] = true;
    });

    console.log(winner.line, current);
  } else {
    status = "Next player: " + (xIsNext ? "X" : "◯");
  }

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const btnSelected = (move: number) => {
    return move === stepNumber;
  };

  const moves = history.map((_, move) => {
    const desc = move ? "Go to move #" + move : "go to game start";

    // 選択された場合、文字を太字にする。
    if (btnSelected(move)) {
      return (
        <li key={move}>
          <button className={classes.bold} onClick={() => jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    }
    // default
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const handleClick = (i: number) => {
    // 現在の配列を直接変更する代わりに、
    // .slice() メソッドを使って square 配列のコピーを作成し、それを変更する。
    // immutability; 不変性 ⇔ mutate; 書き換え
    // 利点
    // 1.複雑な機能が簡単に実装できる
    // 直接的なデータのミューテートを避けることで、ゲームの以前のヒストリをそのまま保って後で再利用することができるようになります。
    // 2.変更の検出がしやすい
    // 参照が変わるから。

    const tmpHistory = history.slice(0, stepNumber + 1);
    const squares = current.squares.slice();
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "◯";
    setStepNumber(tmpHistory.length);
    setHistory(tmpHistory.concat({ squares: squares }));
    setXIsNext(!xIsNext);
  };

  return (
    <div className={classes.game}>
      <div className="game-board">
        <Board
          isWin={isWins}
          square={current.squares}
          onClick={(i: number) => {
            handleClick(i);
          }}
        />
      </div>
      <div className={classes.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
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

  const result: { line: number[]; squares: number } = {
    line: [],
    squares: 0, // default
  };
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const aligned =
      squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    if (aligned) {
      result.line = lines[i];
      result.squares = squares[a];
      return result;
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
  bold: {
    fontWeight: "bold",
  },
});
