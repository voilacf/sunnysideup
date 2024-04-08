// WeatherService.ts
import axios from 'axios';

export class WeatherService {
  private static apiUrl: string;
  private static apiKey = "b779f5bb62df31949db3585d41dfe472";
  private static city: string;

  constructor() {
  }


  static removeCity(city: string) {
    // const index = WeatherService.city.indexOf(city)
    // WeatherService.city.splice(index)
  }

  static async getWeatherByCity(city: string): Promise<any> {
    WeatherService.apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=metric`;
    try {
      const response = await axios.get(WeatherService.apiUrl, {
        params: {
          q: WeatherService.city,
          appid: this.apiKey,
        },
      });

      console.log(response);

      if (response.data) {
        return response.data;
      } else {
        console.error('Response data is undefined');
        // Handle this case appropriately, e.g., return null or throw an error
      }
    } catch (error: any) {
      if (error.response) {
        console.error('Server responded with status code:', error.response.status);
        console.error('Error response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      console.error('Error config:', error.config);
    }
  }
}

// const sunrise = new Date(sunriseTimestamp * 1000).toLocaleTimeString();

