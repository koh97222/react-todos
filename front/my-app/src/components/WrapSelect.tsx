import React, { useState } from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface SelectProps {
  width: number;
  options: Array<string | number>;
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

  //   const [state, setState] = React.useState<{
  //     idx: number;
  //     value: string;
  //   }>({
  //     idx: 0,
  //     value: "",
  //   });

  const [value, setValue] = useState("");

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

  //   const handleChange = (
  //     event: React.ChangeEvent<{ name?: string; value: unknown }>
  //   ) => {
  //     const value = event.target.name;
  //     setValue(value);
  //   };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          id="select"
          native
          //   value={state.value}
          //   onChange={(e) => handleChange(e)}
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
