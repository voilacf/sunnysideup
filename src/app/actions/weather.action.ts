import {createAction, props} from "@ngrx/store";
import {WeatherData, Unit} from "../interfaces/weather.interface";

export const loadWeatherAction = createAction(
  "[Weather] load weather action", props<{cityName: string}>()
);

export const loadWeatherSuccessAction = createAction(
  "[Weather] load weather success action", props<{cityData: WeatherData}>()
);

export const changeSystemSettingsAction = createAction(
  "[Weather] change system settings action"
);

export const changeSystemSettingsSuccessAction = createAction(
  "[Weather] change system settings success action", props<{metric: Unit}>()
);

