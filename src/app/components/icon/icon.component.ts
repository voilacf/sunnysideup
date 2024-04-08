import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/sidebarstuff/data-service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  static iconType: string;
  static desc: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  public setProperties(): void {
    let data = this.dataService.getData();
    if (!data) {
      return;
    }
    switch (data.weather[0].main.toLowerCase()) {
      case "clouds":
        IconComponent.iconType = "☁︎";
        break;
      case "clear":
        IconComponent.iconType = "☀︎";
        break;
      case "rain":
        IconComponent.iconType = "🌧️";
        break;
      case "mist":
        IconComponent.iconType = "⌯";
        break;
      case "thunderstorm":
        IconComponent.iconType = "⚡︎";
        break;
      case "snow":
        IconComponent.iconType = "❅";
        break;
      default:
        IconComponent.iconType = "";
    }
    IconComponent.desc = data.weather[0].description;
  }

  get icon(): string {
    return IconComponent.iconType;
  }

  get description(): string {
    return IconComponent.desc;
  }

}
