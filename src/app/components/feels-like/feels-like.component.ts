import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/weather-service';

@Component({
  selector: 'app-feels-like',
  templateUrl: './feels-like.component.html',
  styleUrls: ['./feels-like.component.scss']
})
export class FeelsLikeComponent implements OnInit {
  value!: string;

  constructor() { }

  ngOnInit(): void {
    let data = WeatherService.getWeatherByCity().then(data => {
      this.value = `${Math.trunc(data.main.feels_like)} °C`;
    }).catch(error => {
      throw new Error(error);
    });;

  }



}
