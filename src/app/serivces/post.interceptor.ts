import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class PostInterceptor implements HttpInterceptor {

  constructor() {}

  authToken: string = 'myAngularBlogPost';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        'Content-Type':'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.authToken}`
      }
    });

    //return next.handle(request);

    return next.handle(request).pipe(catchError((error, caught) => {
      console.log(error);
      return next.handle(request);
    }));
  }
}
