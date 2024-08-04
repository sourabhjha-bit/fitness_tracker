import { Component, NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FlexLayoutModule} from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatButtonModule, FlexLayoutModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor( private authService:AuthService){
  }

  onSubmit(f:NgForm){
    this.authService.login({
      email: f.value.email,
      password: f.value.password
    })
  }

}
