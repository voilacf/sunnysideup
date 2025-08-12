import {CityData, WeatherData} from "../interfaces/weather.interface";

export const citiesMock: CityData[] = [
  {
    name: "Munich",
    currentTime: null as unknown as Date,
    weatherDescription: "Sunny",
    temperature: {
      current: 20,
      highest: 28,
      lowest: 11,
      feelsLike: 21
    }
  },
  {
    name: "Bamberg",
    currentTime: null as unknown as Date,
    weatherDescription: "Rain",
    temperature: {
      current: 16,
      highest: 22,
      lowest: 9,
      feelsLike: 16
    }
  },
  {
    name: "Singapore",
    currentTime: null as unknown as Date,
    weatherDescription: "Sunny",
    temperature: {
      current: 29,
      highest: 32,
      lowest: 27,
      feelsLike: 32
    }
  }
];

export const fullWeatherDataMock: WeatherData[] = [
  {
    ...citiesMock[0],
    weather: "",
    pressure: 0,
    wind: {
      speed: 0,
      deg: 0,
      gust: 0
    },
    sun: {
      sunset: null as unknown as Date,
      sunrise: null as unknown as Date,
    },
    clouds: 0,
    humidity: 56,
    visibility: 0,
    icon: ""
  },
  {
    ...citiesMock[2],
    weather: "",
    pressure: 0,
    wind: {
      speed: 0,
      deg: 0,
      gust: 0
    },
    sun: {
      sunset: null as unknown as Date,
      sunrise: null as unknown as Date
    },
    clouds: 0,
    humidity: 89,
    visibility: 0,
    icon: ""
  }
]

