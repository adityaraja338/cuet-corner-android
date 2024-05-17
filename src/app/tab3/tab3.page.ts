import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  studentDetails:any;

  constructor(
    private http: HttpService
  ) {}

  ngOnInit() {
    this.getStudentDetails();
  }

  getStudentDetails(){
    this.http.getStudentDetails().subscribe({
      next: (res: any) => {
        this.studentDetails = res.data;
      }
    })
  }
}
