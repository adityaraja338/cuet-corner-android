import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CountdownComponent, CountdownEvent } from 'ngx-countdown';
import { register } from 'swiper/element/bundle';

register();

interface Question {
  text: string;
  options: string[];
}

@Component({
  selector: 'app-live-test',
  templateUrl: './live-test.page.html',
  styleUrls: ['./live-test.page.scss'],
})
export class LiveTestPage implements OnInit {
  @ViewChild('cd', { static: false }) private countdown:
    | CountdownComponent
    | undefined;

  // @ViewChild('swiper')
  // swiperRef: ElementRef | undefined;

  // @ViewChild(IonSlides) slides: IonSlides;

  testing: boolean = false;
  countdownConfig: any = { leftTime: 30 };

  questions: Question[] = [
    {
      text: 'What is the length of a running train crossing another 180-meter long train running in the opposite direction?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'], // Add options for each question
    },
    {
      text: 'What is the length of a running train crossing another 180-meter long train running in the opposite direction?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], // Add options for each question
    },
    {
      text: 'What is the length of a running train crossing another 180-meter long train running in the opposite direction?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'], // Add options for each question
    },
    {
      text: 'What is the length of a running train crossing another 180-meter long train running in the opposite direction?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], // Add options for each question
    },
    // Add more questions as needed
  ];

  currentQuestion: any;
  selectedOptions: any[] = new Array(this.questions.length);
  selectedIndexes: number[] = [];
  markedForReviewIndexes: number[] = [];

  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
    this.currentQuestion = this.questions[0];
  }

  // Function to handle option selection
  checkChange(option: any, questionIndex: number) {
    // Reset selected option for other questions
    // for (let i = 0; i < this.selectedOptions.length; i++) {
    //   if (i !== questionIndex) {
    //     this.selectedOptions[i] = undefined;
    //   }
    // }
    // console.log(option);
    console.log('Selected options list: ', this.selectedOptions);
    // console.log('Selected option for question', questionIndex + 1, ':', option);
    if(option.detail.value === undefined){
      this.selectedIndexes.splice(this.selectedIndexes.indexOf(questionIndex), 1);
    } else {
      this.selectedIndexes.push(questionIndex);
    }
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

  markForReview(index:number){
    if(this.markedForReviewIndexes.indexOf(index) !== -1){
      this.markedForReviewIndexes.splice(this.markedForReviewIndexes.indexOf(index), 1);
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
          }
        }, {
          text: 'Yes',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmed');
            // Perform action here upon confirmation
          }
        }
      ]
    });
  
    await alert.present();
  }
}
