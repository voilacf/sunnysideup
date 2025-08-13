import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {WeatherData, Unit} from "../interfaces/weather.interface";
import {WeatherUtils} from "../utils/weather.utils";
import {SettingsStore} from "../reducer/settings.store";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  private readonly http = inject(HttpClient);
  private readonly store = inject(SettingsStore);
  private readonly ENDPOINT_URL = environment.openWeatherUrl;
  private readonly apiKey = environment.openWeatherApiKey;

  fetchWeatherOfCity(cityName: string): Observable<any> {
    return this.http.get<WeatherData>(
      `${this.ENDPOINT_URL}?q=${cityName}&APPID=${this.apiKey}&units=${this.store.unit()}`
    );
  }
}

