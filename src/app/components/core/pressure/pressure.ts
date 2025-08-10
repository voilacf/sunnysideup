import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-pressure',
  imports: [TranslatePipe],
  templateUrl: './pressure.html',
  styleUrl: './pressure.scss'
})
export class Pressure {
  value = 0;
}
