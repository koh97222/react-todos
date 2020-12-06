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
 * @see https://github.com/typescript-cheatsheets/react#section-2-getting-started
 */
// "通常の関数" バージョンとのいくつかの違い。
// 通常の関数バージョンは暗黙的ですが、React.FunctionComponentは戻り値の型を明示的に指定します（もしくは追加のアノテーションが必要です）。
// displayName、propTypes、defaultProps などの静的プロパティの型チェックとオートコンプリートを提供します。
// defaultPropsをReact.FunctionComponentで使用する際にいくつかの既知の問題があることに注意してください。
// 子の暗黙の定義を提供します(下記参照) - しかし、暗黙の子の型にはいくつかの問題があり(例: DefinitelyTyped#33006)、子を消費するコンポーネントについては明示的にした方が良いかもしれません。
// usage ）
// const Heading: React.FC = (props) => {
//   <h1>{children}</h1>
// }

// const ParentComponent: React.FC = () => {
//   <Heading>Hello World!</Heding>
// }
// children を使用するとタグ内に記述された JSX またはテキストにアクセスすることが可能.
const WrapButton: React.FC<Buttonprops> = (props) => {
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
