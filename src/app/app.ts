import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentModule} from "./modules/component-module/component-module-module";
import {Header} from "./components/frame/header/header";
import {Footer} from "./components/frame/footer/footer";
import {Home} from "./views/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    ComponentModule,
    Header,
    Footer,
    Home
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'sunnysideup';
}
