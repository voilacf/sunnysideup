import {WeatherData, CityLocation} from "../interfaces/weather.interface";

export class WeatherUtils {
  public static transformToWeatherData(data: any): WeatherData {
    if (!data) {
      return {} as WeatherData;
    }
    return {
      name: data.name,
      currentTime: data.timezone,
      weatherDescription: data.weather[0].description,
      temperature: {
        current: data.main.temp,
        highest: data.main.temp_max,
        lowest: data.main.temp_min,
        feelsLike: data.main.feels_like
      },
      weather: data.weather[0].main,
      pressure: data.main.pressure,
      wind: {
        speed: data.wind.speed,
        deg: data.wind.deg,
        gust: data.wind.gust
      },
      sun: {
        sunset: data.sys.sunset,
        sunrise: data.sys.sunrise,
     },
      clouds: data.clouds.all,
      humidity: data.main.humidity,
      icon: data.weather.icon
    };
  }

  public static transfromToCityLocation(data: any): CityLocation {
    return {
      name: data.name,
      country: data.sys.country,
      timezone: data.timezone,
      coordinates: {
        longitude: data.coord.lon,
        latitude: data.coord.lat
      }
    };
  }
}


