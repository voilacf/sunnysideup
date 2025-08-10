import {Injectable, inject} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {exhaustMap, catchError, map, take} from "rxjs/operators";
import {loadWeatherAction,
  loadWeatherSuccessAction,
  changeSystemSettingsAction,
  changeSystemSettingsSuccessAction
} from "../actions/weather.action";
import {toastSuccessAction,
  toastErrorAction
} from "../actions/toast.action";
import {selectUnitSetting} from "../reducer/weather.reducer";
import {WeatherService} from "../services/weather.service";
import {Unit} from "../interfaces/weather.interface";
import {ToastSuccessMessage} from "../interfaces/toast-success-message.enum"
import {ToastErrorMessage} from "../interfaces/toast-error-message.enum";
import {Utils} from "../utils/utils";

@Injectable()
export class WeatherEffects {
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store);
  private readonly weatherService = inject(WeatherService);

  currentMetric$ = selectUnitSetting;

  /*loadWeather$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadWeatherAction),
      exhaustMap(action => {
        if (!Utils.isInputValid(action.cityName)) {
          this.store.dispatch(toastErrorAction({message: ToastErrorMessage.INVALID_USER_INPUT}));
          throw new Error("Error: invlaid user input");
        }
        this.weatherService.fetchWeatherOfCity(action.cityName).pipe(
          map(cityData => {
            if (!cityData) {
              throw new Error("Error occured: weather data of city is empty");
            }

            return loadWeatherSuccessAction({cityData});
          }),
          catchError(() => {
            this.store.dispatch(toastErrorAction({message: ToastErrorMessage.LOAD_WEATHER_ERROR}));
            throw new Error("Fetching weather for city failed");
          })
        )
      })
    );
  });*/

  // todo: fix issues here
  /* changeSystemSettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(changeSystemSettingsAction), () => {
        this.currentMetric$.pipe(take(1)).subscribe(metric => {
          this.store.dispatch(toastSuccessAction({message: ToastSuccessMessage.CHANGE_SETTINGS_SUCCESS}));
          if (metric === Unit.METRIC) {
            return changeSystemSettingsSuccessAction({metric: Unit.IMPERIAL});
          }
          return changeSystemSettingsSuccessAction({metric: Unit.METRIC});
        });
      }),
      catchError(() => {
        // todo: delete -> this should literally never occur, how should it?
        throw new Error("Could not change system settings");
      })
  });*/
}

