import {Injectable} from "@angular/core";
import {HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

@Injectable()
export class InternetInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!window.navigator.onLine) {
      return throwError(() => new HttpErrorResponse({
        error: "No Internet Connection",
        status: 0,
        statusText: "No Internet Connection"
      }));
    }
    return next.handle(request);
  }
}

