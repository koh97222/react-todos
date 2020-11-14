import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import WrapButton from "../components/WrapButton";
import WrapSelect from "../components/WrapSelect";

/**
 * Weather画面
 * OpenWeatherMap APIを用いて、天気予報を表示する。
 * @see https://openweathermap.org/api
 */
const Weather = () => {
  const classes = useStyles();
  const [city, setCity] = useState("");
  return (
    <>
      <div className={classes.main}>
        <h2>天気予報ページ</h2>
        <h5>OpenWeatherMap APIを利用して、天気予報を表示します。</h5>

        <div className={classes.mb100}></div>

        <WrapSelect
          title={"City"}
          width={300}
          options={cityOption}
          setValue={(e) => setCity(e)}
        ></WrapSelect>
        <WrapButton
          width={200}
          height={56}
          title={"天気予報を表示する。"}
          click={() => {
            getWeatherInfo();
          }}
        />
      </div>
    </>
  );
};

const getWeatherInfo = () => {
  console.log("getWeatherInfo start");
  const lat = 36;
  const lon = 140;
  //   const path =
  //     "https://api.openweathermap.org/data/2.5/onecall?lat=36&lon=140&appid=2ccfd4d986b14add9ca00ea5e81ef02e";
};

const cityOption = ["札幌", "仙台", "東京", "名古屋", "大阪", "広島", "福岡"];

/**
 * style
 */
const useStyles = makeStyles({
  main: {
    textAlign: "center",
  },
  mb100: {
    marginBottom: "100px",
  },
});

export default Weather;
