import {createReducer, on, createSelector, createFeatureSelector} from "@ngrx/store";
import {loadWeatherSuccessAction} from "../actions/weather.action";
import {WeatherData, Unit} from "../interfaces/weather.interface";

export interface AppState {
  readonly searchParam: string;
  readonly selectedCity: WeatherData;
  readonly cities: WeatherData[];
  readonly unitSetting: Unit;
}

export const initialState: AppState = {
  searchParam: "",
  selectedCity: {} as WeatherData,
  cities: [],
  unitSetting: Unit.METRIC
}

export const weatherReducer = createReducer(
  initialState,
  on(loadWeatherSuccessAction, (state, {cityData}): AppState => ({
    ...state,
    selectedCity: cityData
  }))
);

export const selectAppState = createFeatureSelector<AppState>("app");

export const selectSearchParam = createSelector(
  selectAppState,
  (state) => state.searchParam
);

export const selectSelectedCity = createSelector(
  selectAppState,
  (state) => state.selectedCity
);

export const selectCities = createSelector(
  selectAppState,
  (state) => state.cities
);

export const selectUnitSetting = createSelector(
  selectAppState,
  (state) => state.unitSetting
);

