import { AddToastService } from 'src/app/shared/services/add-toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

import { AuthService } from 'src/app/shared/auth/auth.service';
import { HttpService } from 'src/app/shared/services/http.service';

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
    private auth:AuthService,
    private storage:Storage,
    private http:HttpService,
    private router:Router,
    private toast: AddToastService
  ) { }

  async ngOnInit() {
    const isAuthenticated = await this.auth.isUserLoggedIn();
    if (isAuthenticated) {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/','tabs', 'dashboard']);
    }
    this.email = "";
    this.password = "";
    this.showPassword = false;
  }

  login(){
    const data:any = {};
    data['email']= this.email;
    data['password']= this.password;

    this.http.postStudentLogin(data).subscribe({
      next: async (res:any) => {
        await this.storage.set('cuet_access_token', res.data.authToken);
        await this.storage.set('cuet_refresh_token', res.data.refreshToken);
        await this.storage.set('cuet_role', 'student');
        this.auth.login();
        this.toast.presentToast('Logged-in successfully!');
      }, error: (err: any) => {
        this.toast.presentToast(err.error.message || 'Oops! Something went wrong!');
      }
    })
  }
}
