import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { AddToastService } from '../shared/services/add-toast.service';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  studentDetails:any;

  constructor(
    private http: HttpService,
    private toast: AddToastService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.getStudentDetails();
  }

  getStudentDetails(){
    this.http.getStudentDetails().subscribe({
      next: (res: any) => {
        this.studentDetails = res.data;
      },
      error: (err: any) => {
        if (err.status == 401) {
          // console.log(refreshToken);
          return this.http.refreshToken(()=>{
            this.getStudentDetails();
          });
        } else {
          // console.log(error);
          return this.toast.presentToast(
            err.error.message || 'Oops! Something went wrong!'
          );
        }
      },
    })
  }

  logout(){
    this.toast.presentToast("User logged-out successfully!")
    this.auth.logout();
  }
}
