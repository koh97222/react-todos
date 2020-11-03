import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface TextFieldProps {
  id: string;
  label: string;
  helperText: string;
}

/**
 * outlinedされたtextfieldのラッパコンポーネント
 * @param props
 */
const WrapOutlinedTextField = (props: TextFieldProps) => {
  const classes = useStyles();
  const [input, setValue] = useState("");

  return (
    <>
      <TextField
        className={classes.field}
        id={props.id}
        label={props.label}
        variant="outlined"
        helperText={props.helperText}
        value={input}
        onChange={(e) => setValue(e.target.value)}
      ></TextField>
    </>
  );
};

/**
 * style
 */
const useStyles = makeStyles({
  field: {
    width: 350,
  },
});

export default WrapOutlinedTextField;
