import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {Store} from "@ngrx/store";
import {selectWeatherData} from "../../reducer/weather.reducer";

import {Temperature} from "../../components/core/temperature/temperature";
import {Humidity} from "../../components/core/humidity/humidity";
import {FeelsLike} from "../../components/core/feels-like/feels-like";
import {Pressure} from "../../components/core/pressure/pressure";
import {Sun} from "../../components/core/sun/sun";
import {Visibility} from "../../components/core/visibility/visibility";
import {Wind} from "../../components/core/wind/wind";

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    Temperature,
    Humidity,
    FeelsLike,
    Pressure,
    Sun,
    Visibility,
    Wind,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly store = inject(Store);

  readonly weatherData$ = this.store.select(selectWeatherData);
}

