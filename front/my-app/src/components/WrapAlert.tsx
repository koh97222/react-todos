import React, { useState, useEffect } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Collapse, ThemeProvider } from "@material-ui/core";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";

interface AlertProps {
  msg: string[];
  title: string;
}

const WrapAlert = React.forwardRef<HTMLButtonElement, AlertProps>(
  (props, ref) => {
    const [open, setOpen] = useState(false);
    const theme = unstable_createMuiStrictModeTheme();

    useEffect(() => {
      setOpen(props.msg.length !== 0);
    }, [props.msg]);

    return (
      <div className={"WrapAlert"}>
        <ThemeProvider theme={theme}>
          <Collapse ref={ref} in={open}>
            <Alert severity={"error"}>
              <AlertTitle>{props.title}</AlertTitle>
              {props.msg}
            </Alert>
          </Collapse>
        </ThemeProvider>
      </div>
    );
  }
);

// const FancyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   (props, ref) => (
//     <button type="button" ref={ref} className="FancyButton">
//       {props.children}
//     </button>
//   )
// );

export default WrapAlert;
