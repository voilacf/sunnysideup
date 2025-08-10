import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {WeatherData, Unit} from "../interfaces/weather.interface";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  private readonly http = inject(HttpClient);
  private readonly apiKey = environment.openWeatherApiKey;
  private readonly ENDPOINT_URL = "http://api.openweathermap.org/data/2.5/weather";
  private unit:Unit = Unit.METRIC;

  fetchWeatherOfCity(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${this.ENDPOINT_URL}?q=${cityName}&APPID=${this.apiKey}&units=${this.unit}`
    );
  }

  private transfromData() {
  }
}

