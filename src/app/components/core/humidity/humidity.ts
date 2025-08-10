import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-humidity',
  imports: [TranslatePipe],
  templateUrl: './humidity.html',
  styleUrl: './humidity.scss'
})
export class Humidity {
  value = 0;
}

