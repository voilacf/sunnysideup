import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SearchBar} from "../../core/search-bar/search-bar";

@Component({
  selector: 'app-header',
  imports: [SearchBar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
}

