import {ToastErrorMessage} from "../interfaces/toast-error-message.enum";

export class ApplicationError extends Error {
  override readonly message: ToastErrorMessage;
  readonly additionalInformation: string;
  readonly toastCode: string;

  constructor(messageCode: ToastErrorMessage, details?: string) {
    super();
    this.message = messageCode || ToastErrorMessage.SYSTEM_ERROR;
    this.additionalInformation = details || "";
    this.toastCode = `errorToasts.${messageCode}`;
  }
}

