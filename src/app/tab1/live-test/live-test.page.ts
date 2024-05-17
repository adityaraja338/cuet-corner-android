import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CountdownComponent, CountdownEvent } from 'ngx-countdown';
import { HttpService } from 'src/app/shared/services/http.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-live-test',
  templateUrl: './live-test.page.html',
  styleUrls: ['./live-test.page.scss'],
})
export class LiveTestPage implements OnInit {
  @ViewChild('cd', { static: false }) private countdown:
    | CountdownComponent
    | undefined;

  testing: boolean = false;
  countdownConfig: any = { leftTime: 30 };

  questions: any = [];

  currentQuestion: any;
  selectedOptions: any;
  selectedIndexes: number[] = [];
  markedForReviewIndexes: number[] = [];

  constructor(
    private alertController: AlertController,
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentQuestion = this.questions[0];
    this.postStartTest();
  }

  postStartTest(){
    const testId = this.route.snapshot.params['testId'];
    this.http.postStartTest(testId).subscribe({
      next: (res:any) => {
        this.countdownConfig = { leftTime: res.data.timeLeft };
        this.countdown?.restart();
        this.getQuestions();
      }, error: (error:any) => {
        if(error.status === 401){

        }
        this.router.navigateByUrl('/tabs/dashboard');
      }
    })
  }

  getQuestions() {
    this.http.getQuestions(50).subscribe({
      next: (res: any) => {
        // console.log(res.data);
        this.questions = res.data;
        this.selectedOptions = new Array(this.questions.length);

        // for(let question of this.questions){
        //   if(question.submitted)
        // }
        for (const [index, value] of this.questions.entries()) {
          // console.log(index, value);
          if(value.submittedAnswer){
            this.selectedOptions[index] = value.submittedAnswer;
            this.selectedIndexes.push(index);
            // console.log(this.selectedOptions);
          }
        }
      },
    });
  }

  postSubmitAnswer(questionId:number, value:string) {
    const testId = this.route.snapshot.params['testId'];

    const data:any = {};
    data['testId']=testId;
    data['value']=value;

    this.http.postSubmitAnswer(data, questionId).subscribe({
      next: (res: any) => {
        console.log(res.data);
      },
    });
  }

  postSubmitTest(){
    const testId = this.route.snapshot.params['testId'];
    this.http.postSubmitTest(testId).subscribe({
      next: (res:any) => {
        this.router.navigateByUrl('/tabs/dashboard');
      }
    })
  }

  // Function to handle option selection
  checkChange(option: any, questionIndex: number) {
    console.log('Selected options list: ', this.selectedOptions);
    // console.log('Selected option for question', questionIndex + 1, ':', option);
    if (option.detail.value === undefined) {
      this.selectedIndexes.splice(
        this.selectedIndexes.indexOf(questionIndex),
        1
      );
    } else {
      this.selectedIndexes.push(questionIndex);
    }
    this.postSubmitAnswer(this.questions[questionIndex]?.id, option.detail.value);
    // console.log(this.questions[questionIndex]);
  }

  countdownEnd(e: CountdownEvent) {
    if (e.action === 'done') {
      console.log('khatam');
    }
  }

  onSwiper(swiper: any) {
    // Get the active index of the swiper
    const activeIndex = swiper.detail[0].activeIndex;
    // console.log('swiper:', swiper);
    console.log('index:', activeIndex);
  }

  markForReview(index: number) {
    if (this.markedForReviewIndexes.indexOf(index) !== -1) {
      this.markedForReviewIndexes.splice(
        this.markedForReviewIndexes.indexOf(index),
        1
      );
    } else {
      this.markedForReviewIndexes.push(index);
    }
  }

  async presentConfirmation() {
    const alert = await this.alertController.create({
      header: 'Submit Test',
      message: 'Are you sure you want to submit the test?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'primary',
          handler: () => {
            console.log('Confirmation cancelled');
          },
        },
        {
          text: 'Yes',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmed');
            this.postSubmitTest();
            // Perform action here upon confirmation
          },
        },
      ],
    });

    await alert.present();
  }
}
