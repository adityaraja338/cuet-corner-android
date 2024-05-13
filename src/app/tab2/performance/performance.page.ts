import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements AfterViewInit {
  @ViewChild('performanceCanvas')
  private performanceCanvas!: ElementRef;


  performanceChart:any;

  constructor() { }

  ngAfterViewInit() {
    this.performanceChart = new Chart(this.performanceCanvas.nativeElement, {
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
  }

}
