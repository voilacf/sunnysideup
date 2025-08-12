import {createReducer, on, createSelector, createFeatureSelector} from "@ngrx/store";
import {loadWeatherSuccessAction} from "../actions/weather.action";
import {WeatherData} from "../interfaces/weather.interface";

export interface AppState {
  readonly searchParam: string;
  readonly weatherData: WeatherData;
  readonly cities: WeatherData[];
}

export const initialState: AppState = {
  searchParam: "",
  weatherData: {} as WeatherData,
  cities: [],
}

export const weatherReducer = createReducer(
  initialState,
  on(loadWeatherSuccessAction, (state, {cityData}): AppState => ({
    ...state,
    weatherData: cityData
  }))
);

export const selectAppState = createFeatureSelector<AppState>("app");

export const selectSearchParam = createSelector(
  selectAppState,
  (state) => state.searchParam
);

export const selectWeatherData = createSelector(
  selectAppState,
  (state) => state.weatherData
);

export const selectCities = createSelector(
  selectAppState,
  (state) => state.cities
);

