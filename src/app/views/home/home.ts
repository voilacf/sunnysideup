import {Component, inject, OnInit, OnDestroy} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {Router} from "@angular/router";
import {fromEvent, Subscription} from "rxjs";
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
export class Home implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  private onlineSubscription!: Subscription;
  private offlineSubscription!: Subscription;

  readonly weatherData$ = this.store.select(selectWeatherData);

  ngOnInit() {
    if (!navigator.onLine) {
      this.router.navigate(["/error"]);
    }

    this.onlineSubscription = fromEvent(window, "online").subscribe(() => {
      this.router.navigate(["/"]);
    });

    this.offlineSubscription = fromEvent(window, "offline").subscribe(() => {
      this.router.navigate(["/error"]);
    });
  }

  ngOnDestroy() {
    this.onlineSubscription.unsubscribe();
    this.offlineSubscription.unsubscribe();
  }
}

