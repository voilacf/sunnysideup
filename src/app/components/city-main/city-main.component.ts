import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-city-main',
  templateUrl: './city-main.component.html',
  styleUrls: ['./city-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class CityMainComponent implements OnInit {
  static temp: string = "";
  static city: string = "";
  static high: number = 0;
  static low: number = 0;
  static weatherCondition: string = "";
  private data!: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  public updateComponent(): void {
    // console.log("inside city main updateComponent");
    this.data = this.dataService.getData();
    this.setProperties();
  }

  public setProperties(): void {
    if (!this.data) {
      // console.log("didn't receive data in city main")
      return;
    }
    CityMainComponent.temp = `${Math.trunc(this.data.main.temp)}°C`;
    CityMainComponent.city = this.data.name;
    CityMainComponent.high = Math.trunc(this.data.main.temp_max);
    CityMainComponent.low = Math.trunc(this.data.main.temp_min);
    CityMainComponent.weatherCondition = this.data.weather[0].main;
  }

  // getter for html binding
  get temperature(): string {
    return CityMainComponent.temp;
  }

  get cityName(): string {
    return CityMainComponent.city;
  }

  get high_temp(): number {
    return CityMainComponent.high;
  }

  get low_temp(): number {
    return CityMainComponent.low;
  }

  get condition(): string {
    return CityMainComponent.weatherCondition;
  }
}
