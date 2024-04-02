import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';
import { WeatherService } from 'src/weather-service';
// import './../app';

@Component({
  selector: 'app-city-main',
  templateUrl: './city-main.component.html',
  styleUrls: ['./city-main.component.scss']
})

export class CityMainComponent implements OnInit {
  temp!: string
  city!: string
  high!: number;
  low!: number;
  private static data: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  public updateComponent(): void {
    this.dataService.getData().subscribe(storedData => {
      CityMainComponent.data = storedData;
    });
    console.log("inside city main updateComponent");
    this.setProperties(CityMainComponent.data);
  }

  public setProperties(data: any): void {
    if (!CityMainComponent.data) {
      console.log("didn't receive data in city main")
      return;
    }
    this.temp = `${CityMainComponent.data.main.temp}°C`;
    this.city = CityMainComponent.data.name;
    this.high = CityMainComponent.data.main.temp_max;
    this.low = CityMainComponent.data.main.temp_min;
    console.log(this.temp);
    console.log(this.city);
    console.log(this.high);
    console.log(this.low);
  }

  // public static setTemperature(temperature: number): void {
  //   this.temp = `${Math.trunc(temperature)}°C`;
  // }

  // public static setCityName(cityName: string): void {
  //   this.city = cityName;
  // }

  // public static setMaxTemperature(temperature: number): void {
  //   this.high = temperature;
  // }

  // public static setMinTemperature(temperature: number): void {
  //   this.low = temperature;
  // }

  // onViewingCityDetails(cityData: any) {
  //   if (!cityData) {
  //     console.log("didn't receive data in city main")
  //     return;
  //   }
  //   this.temp = `${cityData.main.temp}°C`;
  //   this.city = cityData.name;
  //   this.high = cityData.main.temp_max;
  //   this.low = cityData.main.temp_min;
  // }
}

