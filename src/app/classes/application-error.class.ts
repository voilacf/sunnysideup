import {ApplicationErrorMessages} from "../interfaces/application-error-messages.enum";

export class ApplicationError extends Error {
  readonly message: ApplicationErrorMessage;
  readonly additionalInformation: string;
  readonly toastCode: string;

  constructor(messageCode: string, details?: string) {
    super();
    this.message = messageCode || ApplicationErrorMessage.SYSTEM_ERROR;
    this.additionalInformation = details || "";
    this.toastCode = `errorToasts.${messageCode}`;
  }
}

