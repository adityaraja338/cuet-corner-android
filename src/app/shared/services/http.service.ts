import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Storage } from '@ionic/storage-angular';
import { AddToastService } from './add-toast.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = 'http://localhost:3000/student/';

  // url = 'https://api.cuetcorner.in/student/';

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private storage: Storage,
    private toast: AddToastService
  ) {}

  // Auth APIs
  postStudentLogin(data: any) {
    return this.http.post(`${this.url}auth`, data);
  }

  postStudentSignup(data: any) {
    return this.http.post(`${this.url}signup`, data);
  }

  async refreshToken(callback: any) {
    const data = { refreshToken: await this.storage.get('cuet_refresh_token') };
    return this.http.post(`${this.url}refresh-token`, data).subscribe({
      next: (res: any) => {
        this.storage.set('cuet_access_token', res.data.accessToken);
        this.storage.set('cuet_refresh_token', res.data.refreshToken);

        callback();
      },
      error: (error) => {
        console.log(error);
        this.toast.presentToast("Please Login in again!")
        this.auth.logout();
      },
    });
  }

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

  postSubmitAnswer(data: any, questionId: number) {
    return this.http.post(`${this.url}test/submit-answer/${questionId}`, data);
  }

  postSubmitTest(testId: number) {
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
