import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = '';
  password:string = '';

  showPassword:boolean= false;

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit() {
  }
}
