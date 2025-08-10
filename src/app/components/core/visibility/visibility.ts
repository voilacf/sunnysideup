import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-visibility',
  imports: [TranslatePipe],
  templateUrl: './visibility.html',
  styleUrl: './visibility.scss'
})
export class Visibility {
  kilometers = 0;
  isMetric: boolean = true;
}

