import { Component, OnInit } from '@angular/core';

import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  performances: any[] = [];

  constructor(
    private http:HttpService
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
        console.log(err);
      }
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
