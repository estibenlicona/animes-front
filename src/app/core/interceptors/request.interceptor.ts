import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from 'rxjs/operators';
import { ProgressBarService } from "../component/services/progress-bar.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private _progressBarService: ProgressBarService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._progressBarService.setShowProgressBar = true;
    return next.handle(req).pipe(
      finalize(() => {
        this._progressBarService.setShowProgressBar = false;
      }),
      catchError( error => {
        return throwError(() => error);
      })
    );
  }

}
