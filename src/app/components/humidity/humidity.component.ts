import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/weather-service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {
  value!: string

  constructor() { }

  ngOnInit(): void {
    let data = WeatherService.getWeatherByCity().then(data => {
      this.value = `${Math.trunc(data.main.humidity)} %`;
    }).catch(error => {
      throw new Error(error);
    });;
  }

}
