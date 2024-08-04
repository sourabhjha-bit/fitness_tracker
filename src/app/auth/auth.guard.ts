import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';

Injectable({
  providedIn: 'root'
})

export const AuthGuard: CanActivateFn = (route , state) =>
{
  if(inject(AuthService).isAuth()){
    return true;
  }else {
    inject(Router).navigate(['/login'])
    return false
  }
};
