import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentModule} from "./modules/component-module/component-module-module";
import {Header} from "./components/frame/header/header";
import {Fotter} from "./components/frame/fotter/fotter";
import {Home} from "./views/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    ComponentModule,
    Header,
    Fotter,
    Home
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'sunnysideup';
}

