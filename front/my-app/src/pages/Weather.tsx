import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import WrapSelect from "../components/WrapSelect";
import getWeather from "../Weather";
import WeatherInfo from "../components/WeatherInfo";
import Spinner from "../components/Spinner";

/**
 * Weather画面
 * OpenWeatherMap APIを用いて、天気予報を表示する。
 * @see https://openweathermap.org/api
 */
const Weather = () => {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [isSpinnerOpen, setSpinner] = useState(false);

  useEffect(() => {
    getWeatherInfo(city);
  }, [city]);

  const getWeatherInfo = (city: string) => {
    console.log("getWeatherInfo start");
    setSpinner(true);
    // call REST API
    getWeather(city)
      .then((d) => {
        console.log(d);
      })
      .catch((d) => {
        console.error(d);
      })
      .finally(() => {
        setSpinner(false);
      });
  };

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

        <div className={classes.mb100}></div>

        <WeatherInfo city={city} />

        <Spinner isOpen={isSpinnerOpen} />
      </div>
    </>
  );
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
