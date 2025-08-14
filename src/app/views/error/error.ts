import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-error',
  imports: [TranslatePipe],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class Error {
}

