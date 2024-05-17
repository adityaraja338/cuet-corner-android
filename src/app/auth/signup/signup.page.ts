import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.signupForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      age: [null, Validators.required],
      cuetAttempts: [null],
      batchId: [null, Validators.required],
    })
  }

  ngOnInit() {
  }

}
