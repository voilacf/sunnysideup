import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum ToastTypes {
  SUCCESS = "success",
  WARN = "warn",
  ERROR = "error",
  INFO = "info"
}

export enum ToastActionTypes {
  CONFIRM = "CONFIRM",
  ABORT = "ABORT"
}

export interface ToastAction {
  type: ToastActionTypes;
  actionHandler: () => void;
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  standalone: false
})
export class Toast {
  @Input()
  duration = 0;

  @Input()
  message = "";

  @Input()
  subtext = "";

  @Input()
  type:ToastTypes = ToastTypes.INFO;

  @Input()
  actions: ToastAction[] = [];

  @Output()
  clicked = new EventEmitter<void>();

  readonly iconMap = {
    CONFIRM: "✓",
    ABORT: "✗"
  }

  constructor() {}

  performAction(index: number): void {
    this.actions[index].actionHandler();
    this.clicked.emit();
  }
}
