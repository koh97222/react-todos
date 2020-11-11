import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Buttonprops {
  title: string;
  click(): void;
  width: number;
  height: number;
}

/**
 * Buttonをラップしたコンポーネント
 * @param props
 */
const WrapButton = (props: Buttonprops) => {
  const useStyles = makeStyles({
    field: {
      height: props.height,
      width: props.width,
    },
  });
  const classes = useStyles();
  return (
    <>
      <Button
        className={classes.field}
        variant="contained"
        color="primary"
        onClick={() => {
          props.click();
        }}
      >
        {props.title}
      </Button>
    </>
  );
};

/**
 * style
 */

export default WrapButton;
