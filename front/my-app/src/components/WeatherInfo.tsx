import React from "react";
import { Card } from "@material-ui/core";

interface infoProps {
  city: string;
}
const WeatherInfo = (props: infoProps) => {
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
        <h3>{props.city} の天気</h3>
      </Card>
    </>
  );
};

export default WeatherInfo;
