import { Routes } from '@angular/router';
import {Home} from "./views/home/home";
import {Settings} from "./views/settings/settings";
import {Error} from "./views/error/error";

export const routes: Routes = [
  { path: "home", component: Home},
  { path: "settings", component: Settings},
  { path: "error", component: Error},
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

