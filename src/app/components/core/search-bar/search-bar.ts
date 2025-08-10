import {Component, Input, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadWeatherAction} from "../../../actions/weather.action";

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  @Input()
  cityName = "";

  private readonly store = inject(Store);

  fetchCityData() {
    this.store.dispatch(loadWeatherAction({cityName: this.cityName}));
  }
}

