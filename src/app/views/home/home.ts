import {Component} from '@angular/core';
import {Temperature} from "../../components/core/temperature/temperature";
import {Humidity} from "../../components/core/humidity/humidity";
import {FeelsLike} from "../../components/core/feels-like/feels-like";
import {Pressure} from "../../components/core/pressure/pressure";
import {Sun} from "../../components/core/sun/sun";
import {Visibility} from "../../components/core/visibility/visibility";
import {Wind} from "../../components/core/wind/wind";
import {Sidebar} from "../../components/frame/sidebar/sidebar";

@Component({
  selector: 'app-home',
  imports: [
    Temperature,
    Humidity,
    FeelsLike,
    Pressure,
    Sun,
    Visibility,
    Wind,
    Sidebar
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}

