import {createAction, props} from "@ngrx/store";
import {ToastSuccessMessage} from "../interfaces/toast-success-message.enum"
import {ToastErrorMessage} from "../interfaces/toast-error-message.enum";

export const toastSuccessAction = createAction(
  "[Toast] success action", props<{message: ToastSuccessMessage}>()
);

export const toastErrorAction = createAction(
  "[Toast] error action", props<{message: ToastErrorMessage, details?: string}>()
);

