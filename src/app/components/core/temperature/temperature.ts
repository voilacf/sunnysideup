import {Component, input} from '@angular/core';
import {WeatherData} from "../../../interfaces/weather.interface";

@Component({
  selector: 'app-temperature',
  imports: [],
  templateUrl: './temperature.html',
  styleUrl: './temperature.scss'
})
export class Temperature{
  readonly weatherData = input.required<WeatherData>();
}

