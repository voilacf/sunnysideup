import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Toast} from "../../components/core/toast/toast";

import {Error} from "../../views/error/error";
import {Settings} from "../../views/settings/settings";

@NgModule({
  declarations: [
    Error,
    Settings,
    Toast,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentModule { }
