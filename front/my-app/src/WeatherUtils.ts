// endpoint
const endpoint = "https://api.openweathermap.org/data/2.5/onecall";
const APIkey = "2ccfd4d986b14add9ca00ea5e81ef02e";
export interface Result {
  current: Current;
  daily: Daily[];
}

/**
 * その日時点の天気情報
 */
export interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Array<object>;
}

/**
 * 現在の天気
 */
export interface CurrentWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

/**
 * 週間予報
 */
export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: { day: number; night: number; eve: number; morn: number };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: CurrentWeather[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

/**
 *　天気予報を取得します
 * @param lat 緯度
 * @param lon 経度
 */
export const getWeather = async (city: string): Promise<Result> => {
  const { lat, lon } = convertCitiesToLatAndLon(city);
  const res = await fetch(
    `${endpoint}?lat=${lat}&lon=${lon}&units=metric&lang=ja&exclude=minutely&appid=${APIkey}`
  );
  const data = (await res.json()) as Result;
  // console.log(data);
  return data;
};

/**
 * 指定された都市の緯度と経度を返却します。
 * @param city 都市
 */
const convertCitiesToLatAndLon = (city: string) => {
  if (city === "札幌") return { lat: 43, lon: 141 };
  if (city === "仙台") return { lat: 38, lon: 140 };
  if (city === "東京") return { lat: 35, lon: 139 };
  if (city === "名古屋") return { lat: 35, lon: 136 };
  if (city === "大阪") return { lat: 34, lon: 135 };
  if (city === "広島") return { lat: 34, lon: 132 };
  if (city === "福岡") return { lat: 33, lon: 130 };

  // default これでよいかはさておき・・
  return { lat: 0, lon: 0 };
};

/**
 * Result型の初期値
 */
export const initResultValue = {
  current: {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    ],
  },
  daily: [
    {
      dt: 1605783600,
      sunrise: 1605764526,
      sunset: 1605808149,
      temp: {
        day: 25.98,
        min: 25.77,
        max: 26.15,
        night: 25.9,
        eve: 25.85,
        morn: 25.77,
      },
      feels_like: {
        day: 26.1,
        night: 26.5,
        eve: 25.85,
        morn: 25.63,
      },
      pressure: 1011,
      humidity: 82,
      dew_point: 22.67,
      wind_speed: 7.06,
      wind_deg: 187,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "小雨",
          icon: "10d",
        },
      ],
      clouds: 100,
      pop: 0.4,
      rain: 0.26,
      uvi: 12.32,
    },
  ],
};

/**
 * 天気予報を表示する都市の選択肢
 */
export const cityOption = [
  "札幌",
  "仙台",
  "東京",
  "名古屋",
  "大阪",
  "広島",
  "福岡",
];
export default getWeather;
