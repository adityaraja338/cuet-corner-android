import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, from, switchMap } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const authToken = token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJlbWFpbCI6ImFiaGluYXZAZ21haWwuY29tIiwiaWF0IjoxNzA2ODQ5NTY4LCJleHAiOjE3MDk0NDE1Njh9.QVv6MwspeV1JPdr03PRmgjfeAy45jK5sgnY2niBFFf4';
    // const authToken = token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsImJhdGNoSWQiOjEsImlhdCI6MTcwNzIyNDk1NCwiZXhwIjoxNzA5ODE2OTU0fQ.PHRHsglhFOyCZM3X5KwDw0EcM711mO8Opv6jc-1d5FY';

    // Exclude student login API by URL
    if (
      request.url.includes('/auth') ||
      request.url.includes('/student/create') ||
      request.url.includes('/reset-password') ||
      request.url.includes('/refresh-token') 
    ) {
      return next.handle(request); // Don't intercept login request
    }

    return from(this.storage.get('cuet_access_token')).pipe(
      switchMap((token) => {
        if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        return next.handle(request);
      })
    );
  }

  constructor(private storage: Storage) {}
}
