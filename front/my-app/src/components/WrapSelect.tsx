import React, { useState } from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface SelectProps {
  width: number;
  options: Array<string | number>;
  title: string;
  setValue(e: string): void;
}

/**
 * Selectのラッパコンポーネント
 */
const WrapSelect = (props: SelectProps) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: props.width,
      },
    })
  );
  const classes = useStyles();

  /**
   * 選択肢生成
   * @param options
   */
  const options = (options: Array<string | number>) => {
    const option = options.map((value, index) => {
      return optionItem(index, value);
    });
    return option;
  };
  const optionItem = (key: number, value: string | number) => {
    return (
      <option key={key} value={value}>
        {value}
      </option>
    );
  };

  // 公式の仕掛けを流用してみた
  const [state, setState] = React.useState<{
    value: string | number;
    name: string;
  }>({
    value: "",
    name: props.title,
  });
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;

    props.setValue(event.target.value as string);

    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">{props.title}</InputLabel>
        <Select
          id="select"
          native
          value={state.value}
          onChange={(e) => handleChange(e)}
          inputProps={{
            name: "value",
            id: "age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          {options(props.options)}
        </Select>
      </FormControl>
    </>
  );
};

export default WrapSelect;
