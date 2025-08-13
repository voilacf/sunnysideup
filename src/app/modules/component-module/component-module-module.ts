import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Toast} from "../../components/core/toast/toast";

import {Error} from "../../views/error/error";

@NgModule({
  declarations: [
    Error,
    Toast,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentModule { }
