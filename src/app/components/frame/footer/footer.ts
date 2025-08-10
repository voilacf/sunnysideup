import {Component} from '@angular/core';
import {Utils} from "../../../utils/utils";

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  date = Utils.extractDate(new Date(), true);
}

