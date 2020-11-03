import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Buttonprops {
  title: string;
  click(): void;
}

/**
 * Buttonをラップしたコンポーネント
 * @param props
 */
const WrapButton = (props: Buttonprops) => {
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
const useStyles = makeStyles({
  field: {
    height: 56,
    width: 100,
  },
});
export default WrapButton;
