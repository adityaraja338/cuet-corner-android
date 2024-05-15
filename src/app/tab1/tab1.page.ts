import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { HttpService } from '../shared/http.service';
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
  nextTest:any = null;

  name: string ='';

  constructor(
    private router:Router,
    private http: HttpService
  ) {}

  // ionViewWillEnter(){
    
  // }

  ngOnInit(): void {
    this.http.getNextTest().subscribe({
      next: (res:any) => {
        this.nextTest = res.data;
      }, error: (err:any)=> {

      }
    })
  }

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

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
