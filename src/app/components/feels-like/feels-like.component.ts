import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';
import { WeatherService } from 'src/weather-service';

@Component({
  selector: 'app-feels-like',
  templateUrl: './feels-like.component.html',
  styleUrls: ['./feels-like.component.scss']
})
export class FeelsLikeComponent implements OnInit {
  static temperature: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  public setProperties(): void {
    let data = this.dataService.getData();
    if (!data) {
      return;
    }
    FeelsLikeComponent.temperature = `${Math.trunc(data.main.feels_like)}°C`;
  }

  get value(): string {
    return FeelsLikeComponent.temperature;
  }


}
