import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {Utils} from "../../../utils/utils";

@Component({
  selector: 'app-sun',
  imports: [TranslatePipe],
  templateUrl: './sun.html',
  styleUrl: './sun.scss'
})
export class Sun {
  sunrise = Utils.extractTimeFromDate(new Date(), true);
  sunset = Utils.extractTimeFromDate(new Date(), true);
}

