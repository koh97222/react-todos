import React from "react";
import { Button, makeStyles } from "@material-ui/core";

interface BtnProps {
  title: string;
  width: number;
  height: number;
}
const WithArrowBtn: React.FC<BtnProps> = (props) => {
  const useStyles = makeStyles({
    btn: {
      border: "1px solid",
      width: props.width,
      height: props.height,
      "&:hover": {
        transform: "scale(1.02,1.02)",
        transitionDuration: "1s",
        background: "#537791",
        color: "white",
      },
    },
  });
  const classes = useStyles();
  return (
    <>
      <Button className={classes.btn}>{props.title}</Button>
    </>
  );
};

export default WithArrowBtn;
