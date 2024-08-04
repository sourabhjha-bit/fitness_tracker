import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { TrainingComponent } from './training/training.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [

    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'training', component: TrainingComponent, canActivate: [AuthGuard]}
];
