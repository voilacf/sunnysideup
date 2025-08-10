import {Component} from '@angular/core';

@Component({
  selector: 'app-temperature',
  imports: [],
  templateUrl: './temperature.html',
  styleUrl: './temperature.scss'
})
export class Temperature {
  cityName = "Bamberg";
  temperature = 0;
  condition = "Sunny";
  high_temp = 0;
  low_temp = 0;
}

