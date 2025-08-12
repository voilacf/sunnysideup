import {Component, input} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {WeatherData} from "../../../interfaces/weather.interface";

@Component({
  selector: 'app-pressure',
  imports: [TranslatePipe],
  templateUrl: './pressure.html',
  styleUrl: './pressure.scss'
})
export class Pressure {
  readonly weatherData = input.required<WeatherData>();
}

