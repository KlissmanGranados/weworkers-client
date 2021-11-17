import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.profile() !== undefined) {
        const authreq = request.clone({ headers: request.headers.set('token', this.authService.gettoken())});
        return next.handle(authreq).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 403) {
                    alert(`${err.error.message}`);
                }
                return throwError( err );
            })
        );
    } else {
        return next.handle(request);
    }
  }

}
