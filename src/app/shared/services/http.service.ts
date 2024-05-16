import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:3000/student/';

  constructor(
    private http: HttpClient
  ) { }

  getNextTest(){
    return this.http.get(`${this.url}next-test`);
  }
}
