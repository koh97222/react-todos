import React from "react";
import { makeStyles } from "@material-ui/core";
import WrapButton from "../components/WrapButton";

/**
 * Weather画面
 * OpenWeatherMap APIを用いて、天気予報を表示する。
 * @see https://openweathermap.org/api
 */
const Weather = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <h2>天気予報ページ</h2>
        <p>OpenWeatherMap APIを利用して、天気予報を表示します。</p>
      </div>
      <WrapButton
        width={150}
        height={56}
        title={"APIを叩く！"}
        click={() => {
          getWeatherInfo();
        }}
      />
    </>
  );
};

const getWeatherInfo = () => {
  console.log("getWeatherInfo start");
};

/**
 * style
 */
const useStyles = makeStyles({
  header: {
    textAlign: "center",
    marginBottom: "100px",
  },
});

export default Weather;
