import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Divider } from "@material-ui/core";
import WrapSelect from "../components/WrapSelect";
import getWeather from "../WeatherUtils";
import WeatherInfo from "../components/WeatherInfo";
import Spinner from "../components/Spinner";
import { Result, initResultValue, cityOption } from "../WeatherUtils";
import WrapButton from "../components/WrapButton";
import { useHistory } from "react-router-dom";

/**
 * Weather画面
 * OpenWeatherMap APIを用いて、天気予報を表示する。
 * @see https://openweathermap.org/api
 */
const Weather = () => {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [isSpinnerOpen, setSpinner] = useState(false);
  const [result, setResult] = useState<Result>(initResultValue);
  const history = useHistory();

  useEffect(() => {
    getWeatherInfo(city);
  }, [city]);

  const getWeatherInfo = (city: string) => {
    // console.log("getWeatherInfo start");
    setSpinner(true);
    // call REST API
    getWeather(city)
      .then((d) => {
        // console.log(d);
        setResult(d);
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
        <div className={classes.mb30}></div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={2}>
              <Grid item xs={2} sm={2}>
                <WrapButton
                  title={"戻る"}
                  width={50}
                  height={30}
                  click={() => {
                    history.push("/");
                  }}
                ></WrapButton>
              </Grid>
              <Grid item xs={8} sm={8}>
                <h2>天気予報ページ</h2>
              </Grid>
              <Grid item xs={2} sm={2}></Grid>
            </Grid>

            <Divider />

            <h5>OpenWeatherMap APIを利用して、天気予報を表示します。</h5>

            <div className={classes.mb100}></div>
            <WrapSelect
              title={"City"}
              width={300}
              options={cityOption}
              setValue={(e) => setCity(e)}
            ></WrapSelect>
          </Grid>

          <div className={classes.mb100}></div>

          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <WeatherInfo city={city} result={result} />
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>

        <Spinner isOpen={isSpinnerOpen} />
      </div>
    </>
  );
};

/**
 * style
 */
const useStyles = makeStyles({
  main: {
    textAlign: "center",
  },
  mb30: {
    marginBottom: "30px",
  },
  mb100: {
    marginBottom: "100px",
  },
});

export default Weather;
