// endpoint
const endpoint = "https://api.openweathermap.org/data/2.5/onecall";
const APIkey = "2ccfd4d986b14add9ca00ea5e81ef02e";
export interface Result {
  current: Current;
}

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

export interface CurrentWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
// interface APIError {
//   id: string;
//   message: string;
// }

// interface getWeatherResult {
//   status: "success" | "error";
//   apiResult?: Result;
//   error?: string;
// }

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
  console.log(data);
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
