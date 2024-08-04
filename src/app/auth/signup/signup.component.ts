import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ MatFormFieldModule, CommonModule, MatInputModule, FormsModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, FlexLayoutModule, MatCheckboxModule, MatButtonModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {

  maxDate:any;
  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }

  onSubmit(f:NgForm){
    this.authService.registerUser({
      email: f.value.email,
      password: f.value.password
    })
  }

}
