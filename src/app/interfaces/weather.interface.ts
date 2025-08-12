export interface CityData {
  readonly name: string;
  readonly currentTime: Date;
  readonly weatherDescription: string;
  readonly temperature: {
    current: number;
    highest: number;
    lowest: number;
    feelsLike: number;
  };
}

export interface WeatherData extends CityData {
  readonly weather: string;
  readonly pressure: number;
  readonly wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  readonly sun: {
    sunset: Date;
    sunrise: Date;
  };
  readonly clouds: number;
  readonly humidity: number;
  readonly visibility: number;
  readonly icon: string;
}

export interface CityLocation {
  readonly name: string;
  readonly country: string;
  readonly timezone: string;
  readonly coordinates: {
    longitude: number;
    latitude: number;
  }
}

export enum Unit {
  METRIC = "metric",
  IMPERIAL = "imperial"
}

