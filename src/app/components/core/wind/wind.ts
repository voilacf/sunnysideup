import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-wind',
  imports: [TranslatePipe],
  templateUrl: './wind.html',
  styleUrl: './wind.scss'
})
export class Wind {
  speed = 0;
  deg = 0;
}

