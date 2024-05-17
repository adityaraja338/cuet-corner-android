import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { HttpService } from '../shared/services/http.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, AfterViewInit {
  @ViewChild('overallCanvas')
  private overallCanvas!: ElementRef;

  @ViewChild('previousCanvas')
  private previousCanvas!: ElementRef;

  @ViewChild(IonModal) modal!: IonModal;

  overallChart: any;
  previousChart: any;

  nextTest: any = null;
  overallPerformance:any;
  previousPerformance:any;

  name: string = '';

  constructor(private router: Router, private http: HttpService) {}

  ngOnInit(): void {
    this.getNextTest();
    this.getOverallPerformance();
    this.getPreviousPerformance();
  }

  ngAfterViewInit() {
    this.overallChart = new Chart(this.overallCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Correct', 'Incorrect', 'Unattempted'],
        datasets: [
          {
            data: [50, 29, 15],
            backgroundColor: ['#8555FD', '#C1B2FF', '#E4E0FA'],
            // hoverBackgroundColor: [
            //   '#FFCE56',
            //   '#FF6384',
            //   '#36A2EB',
            // ],
            borderJoinStyle: 'round',
          },
        ],
      },
      options: {
        cutout: '75%',
        radius: 58,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    this.previousChart = new Chart(this.previousCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Correct', 'Incorrect', 'Unattempted'],
        datasets: [
          {
            data: [69, 29, 15],
            backgroundColor: ['#8555FD', '#C1B2FF', '#E4E0FA'],
            borderJoinStyle: 'round',
          },
        ],
      },
      options: {
        cutout: '75%',
        radius: 58,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  ionViewWillEnter(){
    this.getNextTest();
  }

  getNextTest(){
    this.http.getNextTest().subscribe({
      next: (res: any) => {
        this.nextTest = res.data;
      },
      error: (err: any) => {},
    });
  }

  getOverallPerformance(){
    this.http.getOverallPerformance().subscribe({
      next: (res:any) => {
        // console.log(res.data);
        this.overallPerformance = res.data;

        this.overallChart.data.datasets[0].data = [
          this.overallPerformance.correct,
          this.overallPerformance.incorrect,
          this.overallPerformance.unattempted,
        ];

        this.overallChart.update();
      }, error: (err:any) => {

      }
    })
  }

  getPreviousPerformance(){
    this.http.getPreviousPerformance().subscribe({
      next: (res:any) => {
        // console.log(res.data);
        this.previousPerformance = res.data;

        this.previousChart.data.datasets[0].data = [
          this.previousPerformance.correct,
          this.previousPerformance.incorrect,
          this.previousPerformance.unattempted,
        ];

        this.previousChart.update();
      }, error: (err:any) => {

      }
    })
  }

  navigateToTab2(event:any, testId:number) {
    // Navigate to the desired tab programmatically
    setTimeout(() => {
      if (!event.target.closest('.chart-div')){
        this.router.navigateByUrl('/tabs/performances/'+ testId);
      }
    }, 220);
  }

  // onRowClick(event: any, studentSelected: any) {
  //   const student = studentSelected;
  //   if (!event.target.closest('.menu-button-container')) {
  //     this.router.navigateByUrl('admin/students/' + student.id);
  //   }
  //   this.currentStudent = student;
  // }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
