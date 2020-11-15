import React from "react";
import { Card } from "@material-ui/core";
import { Result, CurrentWeather } from "../WeatherUtils";

interface infoProps {
  city: string;
  result: Result;
}
/**
 * 天気予報の詳細を表示するコンポーネント
 * @param props
 */
const WeatherInfo = (props: infoProps) => {
  const { current } = props.result;
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
      <Card>
        <h3>{`${props.city} の天気 : ${weather.description}`}</h3>
        <p>{`気温：${current.temp} 度`}</p>
        <p>{`湿度：${current.humidity} %`}</p>
        <p>{`気圧：${current.pressure} hPa`}</p>
      </Card>
    </>
  );
};

export default WeatherInfo;
