import {Component, input} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {WeatherData} from "../../../interfaces/weather.interface";

@Component({
  selector: 'app-humidity',
  imports: [TranslatePipe],
  templateUrl: './humidity.html',
  styleUrl: './humidity.scss'
})
export class Humidity {
  readonly weatherData = input.required<WeatherData>();
}

