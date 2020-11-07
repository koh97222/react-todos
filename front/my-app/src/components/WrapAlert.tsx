import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

interface AlertProps {
  msg: string;
  title: string;
  wrapper: any;
}

const WrapAlert = (props: AlertProps) => {
  return (
    <div ref={props.wrapper}>
      <Alert severity={"error"}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.msg}
      </Alert>
    </div>
  );
};

export default WrapAlert;
