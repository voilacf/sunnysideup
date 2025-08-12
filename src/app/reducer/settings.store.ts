import {computed} from "@angular/core";
import {signalStore, withState, withMethods, withComputed, patchState} from "@ngrx/signals";
import {Unit} from "../interfaces/weather.interface";

export interface SettingsState {
  unit: Unit
}

export const initialState: SettingsState = {
  unit: Unit.METRIC
};

export const SettingsStore = signalStore(
  {providedIn: "root"},
  withState(initialState),
  withMethods(store => ({
    changeToMetric: () => patchState(store, {unit: Unit.METRIC}),
    changeToImperial: () => patchState(store, {unit: Unit.IMPERIAL})
  })),
  withComputed((store) => ({
    unit: computed(() => store.unit())
  }))
);

