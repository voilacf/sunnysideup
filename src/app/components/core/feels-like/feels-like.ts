import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-feels-like',
  imports: [TranslatePipe],
  templateUrl: './feels-like.html',
  styleUrl: './feels-like.scss'
})
export class FeelsLike {
  value = 0;
}

