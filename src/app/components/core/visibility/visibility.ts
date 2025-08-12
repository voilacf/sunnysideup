import {Component, input, inject} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {WeatherData, Unit} from "../../../interfaces/weather.interface";
import {SettingsStore} from "../../../reducer/settings.store";

@Component({
  selector: 'app-visibility',
  imports: [TranslatePipe],
  templateUrl: './visibility.html',
  styleUrl: './visibility.scss'
})
export class Visibility {
  readonly weatherData = input.required<WeatherData>();
  readonly settingsStore = inject(SettingsStore);

  isMetric: boolean = (this.settingsStore.unit() === Unit.METRIC);
}

