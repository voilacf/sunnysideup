import {computed} from "@angular/core";
import {signalStore, withState, withMethods, withComputed, patchState} from "@ngrx/signals";
import {Unit, Language, Theme} from "../interfaces/settings.interface";

export interface SettingsState {
  unit: Unit,
  lang: Language,
  theme: Theme
}

export const initialState: SettingsState = {
  unit: Unit.METRIC,
  lang: Language.ENGLISH,
  theme: Theme.LIGHT
};

export const SettingsStore = signalStore(
  {providedIn: "root"},
  withState(initialState),
  withMethods(store => ({
    changeToMetric: () => patchState(store, {unit: Unit.METRIC}),
    changeToImperial: () => patchState(store, {unit: Unit.IMPERIAL}),
    changeToEnglish: () => patchState(store, {lang: Language.ENGLISH}),
    changeToGerman: () => patchState(store, {lang: Language.GERMAN}),
    changeToLightTheme: () => patchState(store, {theme: Theme.LIGHT}),
    changeToDarkTheme: () => patchState(store, {theme: Theme.DARK})
  }))
);

