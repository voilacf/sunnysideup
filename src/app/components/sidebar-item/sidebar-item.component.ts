import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';
import { CityMainComponent } from '../city-main/city-main.component';
import { SunComponent } from '../sun/sun.component';
import { WindComponent } from '../wind/wind.component';
import { FeelsLikeComponent } from '../feels-like/feels-like.component';
import { HumidityComponent } from '../humidity/humidity.component';
import { VisibilityComponent } from '../visibility/visibility.component';
import { PressureComponent } from '../pressure/pressure.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() cityName!: string;
  @Input() time!: string;
  @Input() weatherCondition!: string;
  @Input() temperature!: number;
  @Input() max_temperature!: number;
  @Input() min_temperature!: number;
  @Input() full_data: any;
  static icons = ["☀︎", "⛅︎", "☁︎", "☾", "❄️", "🌧️", "⚡︎", "⌯"];
  icon = "";

  constructor(private dataService: DataService) {

  }

  onButtonClick() {
    const self = this;
    try {
      if (self.dataService) {
        self.dataService.setData(self.full_data);
        let city = new CityMainComponent(self.dataService);
        city.updateComponent();
        let sun = new SunComponent(self.dataService);
        sun.setProperties();
        let wind = new WindComponent(self.dataService);
        wind.setProperties();
        let feelsLike = new FeelsLikeComponent(self.dataService);
        feelsLike.setProperties();
        let humidity = new HumidityComponent(self.dataService);
        humidity.setProperties();
        let visibility = new VisibilityComponent(self.dataService);
        visibility.setProperty();
        let pressure = new PressureComponent(self.dataService);
        pressure.setProperty;
        let icon = new IconComponent(self.dataService);
        icon.setProperties();
      }
    } catch {
      // error handling here
    }
  }

  ngOnInit(): void {
    switch (this.weatherCondition) {
      case "clouds":
        this.icon = "☁︎";
        break;
      case "clear":
        this.icon = "☀︎";
        break;
      case "rain":
        this.icon = "🌧️";
        break;
      case "mist":
        this.icon = "⌯";
        break;
      case "thunderstorm":
        this.icon = "⚡︎";
        break;
      case "snow":
        this.icon = "❅";
        break;
      default:
        this.icon = "";
    }
  }
}
