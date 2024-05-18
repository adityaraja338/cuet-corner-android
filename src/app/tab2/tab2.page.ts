import { Component, OnInit } from '@angular/core';

import { HttpService } from '../shared/services/http.service';
import { AddToastService } from '../shared/services/add-toast.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  performances: any[] = [];

  constructor(
    private http:HttpService,
    private toast: AddToastService
  ) {}

  ngOnInit(): void {
    this.getAllPerformances();
  }

  getAllPerformances(){
    this.http.getAllPerformances().subscribe({
      next: (res:any) => {
        // console.log(res.data);
        this.performances = res.data;
      }, error: (err: any) => {
        if (err.status == 401) {
          // console.log(refreshToken);
          return this.http.refreshToken(()=>{
            this.getAllPerformances();
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

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
    this.getAllPerformances();
  }
}
