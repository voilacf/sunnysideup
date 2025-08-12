import {Component, input} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {Utils} from "../../../utils/utils";
import {WeatherData} from "../../../interfaces/weather.interface";

@Component({
  selector: 'app-sun',
  imports: [TranslatePipe],
  templateUrl: './sun.html',
  styleUrl: './sun.scss'
})
export class Sun {
  readonly weatherData = input.required<WeatherData>();
  sunrise:string = Utils.extractTimeFromDate(new Date(), true);
  sunset:string = Utils.extractTimeFromDate(new Date(), true);

  // todo: update component -> let home implement OnInit?
  updateTime(): void {
    if (!this.weatherData().sun.sunrise || !this.weatherData().sun.sunrise) {
      return;
    }
    this.sunrise = Utils.extractTimeFromDate(this.weatherData().sun.sunrise);
    this.sunset = Utils.extractTimeFromDate(this.weatherData().sun.sunrise);
  }
}

