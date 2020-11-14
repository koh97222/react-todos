import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  unstable_createMuiStrictModeTheme,
  ThemeProvider,
} from "@material-ui/core";

interface SpinnerProps {
  isOpen: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

const Spinner = (props: SpinnerProps) => {
  const classes = useStyles();
  const theme = unstable_createMuiStrictModeTheme();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Backdrop className={classes.backdrop} open={props.isOpen}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </ThemeProvider>
    </div>
  );
};

export default Spinner;
