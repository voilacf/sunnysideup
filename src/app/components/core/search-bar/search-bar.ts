import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {TranslatePipe} from "@ngx-translate/core";
import {loadWeatherAction} from "../../../actions/weather.action";

@Component({
  selector: 'app-search-bar',
  imports: [TranslatePipe],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  private readonly store = inject(Store);

  fetchCityData(cityName: string) {
    this.store.dispatch(loadWeatherAction({cityName}));
  }
}

