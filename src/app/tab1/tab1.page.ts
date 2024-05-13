import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements AfterViewInit {
  @ViewChild('overallCanvas')
  private overallCanvas!: ElementRef;

  @ViewChild('previousCanvas')
  private previousCanvas!: ElementRef;

  overallChart: any;
  previousChart: any;

  constructor(
    private router:Router
  ) {}

  ngAfterViewInit() {
    this.overallChart = new Chart(this.overallCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
        datasets: [
          {
            data: [50, 29, 15],
            backgroundColor: [
              '#8555FD',
              '#C1B2FF',
              '#E4E0FA',
            ],
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
            display: false
          }
        }
      },
    });
    this.previousChart = new Chart(this.previousCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
        datasets: [
          {
            data: [69, 29, 15],
            backgroundColor: [
              '#8555FD',
              '#C1B2FF',
              '#E4E0FA',
            ],
            borderJoinStyle: 'round',
          },
        ],
      },
      options: {
        cutout: '75%',
        radius: 58,
        plugins: {
          legend: {
            display: false
          }
        }
      },
    });
  }

  navigateToTab2() {
    // Navigate to the desired tab programmatically
    setTimeout(()=> {this.router.navigateByUrl('/tabs/performances');}, 220);
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
