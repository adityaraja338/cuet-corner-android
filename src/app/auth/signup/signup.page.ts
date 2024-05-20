import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonModal, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AddToastService } from 'src/app/shared/services/add-toast.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('modal') modal!: IonModal;

  signupForm: FormGroup;

  alertButtons = ['Okay'];
  currentToken: string = '';

  constructor(
    private auth:AuthService,
    private http: HttpService,
    private fb: FormBuilder,
    private toast: AddToastService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern(/^[^@#$!%*?&]+$/)]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
      confirmPassword: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
      countryCode: [
        '+91',
        [Validators.required, Validators.pattern(/^\+\d{1,}$/)],
      ],
      phone: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      age: [null, [Validators.required, Validators.min(16)]],
      cuetAttempts: [null, []],
      batchId: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    // this.signupForm.reset();
  }

  async ionViewWillEnter(){
    const isAuthenticated = await this.auth.isUserLoggedIn();
    if (isAuthenticated) {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/','tabs', 'dashboard']);
    }
  }

  signup() {
    if (this.signupForm.valid) {
      const data: any = {};
      data['name'] = this.signupForm.get('name')?.value;
      data['email'] = this.signupForm.get('email')?.value;
      data['password'] = this.signupForm.get('password')?.value;
      data['confirmPassword'] = this.signupForm.get('confirmPassword')?.value;
      data['countryCode'] = '+91';
      data['phone'] = this.signupForm.get('phone')?.value;
      data['age'] = this.signupForm.get('age')?.value;
      data['cuetAttempts'] = [];
      this.signupForm
        ?.get('cuetAttempts')
        ?.value?.split(',')
        ?.forEach((attempt: any) => {
          data['cuetAttempts'].push(attempt.trim());
        });
      data['batchId'] = this.signupForm.get('batchId')?.value;

      this.http.postStudentSignup(data).subscribe({
        next: (res: any) => {
          this.currentToken = res.data.resetToken;
          this.modal.present();
        },
        error: (err: any) => {
          this.toast.presentToast(
            err.error.message || 'Oops! Something went wrong!'
          );
        },
      });
    } else {
      Object.keys(this.signupForm.controls).forEach((control) => {
        // console.log(control);
        this.signupForm.get(control)?.markAllAsTouched();
      });
      this.toast.presentToast('Please provide valid credentials!');
    }
  }

  async presentConfirmation() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Saved the token?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmation cancelled');
          },
        },
        {
          text: 'Yes',
          cssClass: 'primary',
          handler: () => {
            console.log('Confirmed');
            this.router.navigate(['/', 'login']);
            this.toast.presentToast('User signed-up successfully!');
            this.modal.dismiss();
            // Perform action here upon confirmation
          },
        },
      ],
    });

    await alert.present();
  }
}
