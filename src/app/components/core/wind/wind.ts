import {Component, input} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {WeatherData} from "../../../interfaces/weather.interface";

@Component({
  selector: 'app-wind',
  imports: [TranslatePipe],
  templateUrl: './wind.html',
  styleUrl: './wind.scss'
})
export class Wind {
  readonly weatherData = input.required<WeatherData>();
}

