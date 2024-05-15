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
    const headers = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiQWRpdHlhIiwiYmF0Y2hJZCI6MSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTcxNTc3NDg1NywiZXhwIjoxNzE2NjM4ODU3fQ.Kdml06d4JgLO7ZdFjsq_ZEFbqyaSSQI20tSAImGFpNU`
    });
    return this.http.get(`${this.url}next-test`, {headers})
  }
}
