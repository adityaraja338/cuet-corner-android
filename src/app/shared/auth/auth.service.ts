import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  
  constructor(
    private storage: Storage,
    private router: Router,
  ) { }


  async isUserLoggedIn() {
    if(await this.storage.get('cuet_access_token') && await this.storage.get('cuet_refresh_token')){
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    this.isAuthenticatedSubject.next(false);
    return false;
  }

  login() {
    this.isAuthenticatedSubject.next(true);
    this.router.navigate(['/', 'tabs', 'dashboard']);
  }

  async logout(){
    this.storage.remove('cuet_access_token');
    this.storage.remove('cuet_refresh_token');
    this.storage.remove('cuet_role');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/','login']);
  }
}
