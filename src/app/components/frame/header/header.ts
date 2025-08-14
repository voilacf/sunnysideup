import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslatePipe} from "@ngx-translate/core";
import {SearchBar} from "../../core/search-bar/search-bar";

@Component({
  selector: 'app-header',
  imports: [SearchBar,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
}

