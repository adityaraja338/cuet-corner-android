import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  const isAuthenticated = await auth.isUserLoggedIn();

  if (!isAuthenticated) {
    router.navigate(['/', 'login']);
    return false;
  }

  return true;
};
