import React from "react";
import { Card, Grid, Divider } from "@material-ui/core";
import { Result, CurrentWeather } from "../WeatherUtils";
import { makeStyles } from "@material-ui/core/styles";

interface infoProps {
  city: string;
  result: Result;
}
/**
 * 天気予報の詳細を表示するコンポーネント
 * @param props
 */
const WeatherInfo = (props: infoProps) => {
  const classes = useStyles();
  const { current, daily } = props.result;
  /**
   * ○日後の天気を表示します。
   * expected output: 10/24：小雨 17.6℃ / 15.12℃
   * @param after
   */
  const weeklyForest = (after: number) => {
    const dForest = `
    ${afterDate(after)}：
    ${daily[after - 1].weather[0].description}
    ${daily[after - 1].temp.max}℃ /
    ${daily[after - 1].temp.min}℃`;
    return dForest;
  };

  console.log(JSON.stringify(daily));

  const weather = current.weather[0] as CurrentWeather;
  // 未選択
  if (props.city === "") {
    return (
      <>
        <h3>都市を選択してください。</h3>
      </>
    );
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.main}>
            <h3>{`${props.city} の天気 : ${weather.description}`}</h3>
            <Divider />
            <p>{`気温：${current.temp} 度`}</p>
            <p>{`湿度：${current.humidity} %`}</p>
            <p>{`気圧：${current.pressure} hPa`}</p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.main}>
            <h3>{`${props.city} の週間予報`}</h3>
            <Divider />
            <section className={classes.justify}>
              <p>{`${weeklyForest(1)}`}</p>
              <p>{`${weeklyForest(2)}`}</p>
              <p>{`${weeklyForest(3)}`}</p>
              <p>{`${weeklyForest(4)}`}</p>
              <p>{`${weeklyForest(5)}`}</p>
              <p>{`${weeklyForest(6)}`}</p>
            </section>
          </Card>
        </Grid>
      </Grid>

      <div className={classes.mb50} />
    </>
  );
};

/**
 * style
 */
const useStyles = makeStyles({
  main: {
    backgroundColor: "#F2F2F2",
  },
  mb50: {
    marginBottom: "50px",
  },
  justify: {
    width: "-Webkit-Fit-Content",
    display: "table",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

/**
 * ○日後の日付を返す関数
 * @param after
 * @returns {string} afterDate
 */
const afterDate = (after: number) => {
  const d = new Date();
  d.setDate(d.getDate() + after);
  const aftd = `${d.getMonth() + 1}/${d.getDate()}`;
  return aftd;
};

export default WeatherInfo;
