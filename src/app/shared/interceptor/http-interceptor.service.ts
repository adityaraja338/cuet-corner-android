import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

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
      request.url.includes('/reset-password')
    ) {
      return next.handle(request); // Don't intercept login request
    }

    request = request.clone({
      withCredentials: true,
      setHeaders: {
        // Authorization: `Bearer ${localStorage.getItem('cuet_access_token')}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiQWRpdHlhIiwiYmF0Y2hJZCI6MSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTcxNTc3NDg1NywiZXhwIjoxNzE2NjM4ODU3fQ.Kdml06d4JgLO7ZdFjsq_ZEFbqyaSSQI20tSAImGFpNU`,
      },
    });
    return next.handle(request);
  }

  constructor() {}
}
