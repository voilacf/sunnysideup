import { Component, OnInit } from '@angular/core';
// import { AppData } from '../app';

@Component({
  selector: 'app-hourly-forecast-item',
  templateUrl: './hourly-forecast-item.component.html',
  styleUrls: ['./hourly-forecast-item.component.scss']
})
export class HourlyForecastItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  t = 0
  unit = ["°C", "°F"]

  data = {
    time: "",
    icon: "",
    // temp: `${getTemperature(app.data.temp, this.unit[1])}`

  }
}


// converting temperature based on selected unit
function getTemperature(temp: number, unit?: string): string {
  if (unit === "°F") {
    const fahrenheit: number = (9 / 5 * temp) + 32;
    return `${fahrenheit.toString()} ${unit}`;
  }
  else
    // default is set to degrees celcius 
    return `${temp.toString()} ${unit}`;
}