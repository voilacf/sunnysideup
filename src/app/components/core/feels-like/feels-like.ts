import {Component, input} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {WeatherData} from "../../../interfaces/weather.interface";

@Component({
  selector: 'app-feels-like',
  imports: [TranslatePipe],
  templateUrl: './feels-like.html',
  styleUrl: './feels-like.scss'
})
export class FeelsLike {
  readonly weatherData = input.required<WeatherData>();
}

