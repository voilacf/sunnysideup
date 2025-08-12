import {Injectable, inject} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {exhaustMap, catchError, map, take} from "rxjs/operators";
import {of} from "rxjs";
import {loadWeatherAction,
  loadWeatherSuccessAction,
  changeSystemSettingsAction,
  changeSystemSettingsSuccessAction
} from "../actions/weather.action";
import {toastSuccessAction,
  toastErrorAction
} from "../actions/toast.action";
import {WeatherService} from "../services/weather.service";
import {Unit} from "../interfaces/weather.interface";
import {ToastSuccessMessage} from "../interfaces/toast-success-message.enum"
import {ToastErrorMessage} from "../interfaces/toast-error-message.enum";
import {Utils} from "../utils/utils";
import {WeatherUtils} from "../utils/weather.utils";

@Injectable()
export class WeatherEffects {
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store);
  private readonly weatherService = inject(WeatherService);

  loadWeather$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadWeatherAction),
      exhaustMap(action => {
        if (!Utils.isInputValid(action.cityName)) {
          return of(
            toastErrorAction({ message: ToastErrorMessage.INVALID_USER_INPUT })
          );
        }
        return this.weatherService.fetchWeatherOfCity(action.cityName).pipe(
          map(apiData => {
            if (!apiData) {
              throw new Error("Weather data is empty");
            }
            return loadWeatherSuccessAction({
              cityData: WeatherUtils.transformToWeatherData(apiData)
            });
          }),
          catchError(() => {
            return of(
              toastErrorAction({ message: ToastErrorMessage.LOAD_WEATHER_ERROR })
            );
          })
        );
      })
    );
  });
}

