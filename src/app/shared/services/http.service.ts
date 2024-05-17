import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = 'http://localhost:3000/student/';

  constructor(private http: HttpClient) {}

  // Dashboard APIs
  getNextTest() {
    return this.http.get(`${this.url}next-test`);
  }

  getOverallPerformance() {
    return this.http.get(`${this.url}chart/overall-performance`);
  }

  getPreviousPerformance() {
    return this.http.get(`${this.url}chart/last-test-performance`);
  }

  // Test Page APIs
  postStartTest(testId: number) {
    return this.http.post(`${this.url}test/start`, { testId });
  }

  getQuestions(testId: number) {
    return this.http.get(`${this.url}test/questions`, { params: { testId } });
  }

  postSubmitAnswer(data: any, questionId:number) {
    return this.http.post(`${this.url}test/submit-answer/${questionId}`, data);
  }

  postSubmitTest(testId:number){
    // test/submit/:testId
    return this.http.post(`${this.url}test/submit/${testId}`, {});
  }

  // Performance Page APIs
  getAllPerformances() {
    // /list/test-list
    return this.http.get(`${this.url}list/test-list`);
  }

  getTestPerformance(testId: number) {
    return this.http.get(`${this.url}test-performance/${testId}`);
  }

  // Accounts Page APIs
  getStudentDetails() {
    return this.http.get(`${this.url}get-student-details`);
  }
}
