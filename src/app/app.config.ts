import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideStore} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideHttpClient, HttpClient} from "@angular/common/http";
import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import {weatherReducer} from "./reducer/weather.reducer";
import {WeatherEffects} from "./effects/weather.effects";
import {environment} from "../environments/environment";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({app: weatherReducer}),
    provideEffects([WeatherEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production
    }),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: "/assets/i18n/",
        suffix: ".json"
      }),
      fallbackLang: "en",
      lang: "de"
    })
  ]
};
