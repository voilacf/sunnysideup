import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';
import { WeatherService } from 'src/weather-service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {
  static humidity: string

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  public setProperties(): void {
    let data = this.dataService.getData();
    if (!data) {
      return;
    }
    HumidityComponent.humidity = `${data.main.humidity}%`;
  }

  get value(): string {
    return HumidityComponent.humidity;
  }

}
