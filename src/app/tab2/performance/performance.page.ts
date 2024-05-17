import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit, AfterViewInit {
  @ViewChild('performanceCanvas')
  private performanceCanvas!: ElementRef;

  performanceChart: any;

  performanceData: any;
  testData: any;

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getTestPerformance();
  }

  ngAfterViewInit() {
    this.performanceChart = new Chart(this.performanceCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Correct', 'Incorrect', 'Unattempteds',],
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
  }

  getTestPerformance() {
    const testId = this.route.snapshot.params['testId'];
    this.http.getTestPerformance(testId).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.performanceData = res.data.testPerformance;
        this.testData = res.data.testInfo;

        this.performanceChart.data.datasets[0].data = [
          res.data.testPerformance.correct,
          res.data.testPerformance.incorrect,
          res.data.testPerformance.unattempted,
        ];
        // this.performanceChart.update();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
