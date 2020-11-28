import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface SquareProps {
  value: Number;
  onClick(): void;
}

/**
 * 三目並べ一つ一つの四角のコンポーネント
 * @param props
 */
export const Square = (props: SquareProps) => {
  const classes = useStyles();
  return (
    <>
      <button className={classes.square} onClick={() => props.onClick()}>
        {props.value}
      </button>
    </>
  );
};

const useStyles = makeStyles({
  square: {
    background: "#fff",
    border: "1px solid #999",
    float: "left",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "34px",
    height: "34px",
    marginRight: "-1px",
    padding: 0,
    textAlign: "center",
    width: "34px",
  },
});
