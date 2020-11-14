import React from "react";
import { Card } from "@material-ui/core";

interface infoProps {
  city: string;
}
const WeatherInfo = (props: infoProps) => {
  return (
    <>
      <Card>
        <h3>{props.city} の天気</h3>
      </Card>
    </>
  );
};

export default WeatherInfo;
