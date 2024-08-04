import { Component, EventEmitter, Output, OnInit, OnDestroy, InjectionToken } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatToolbarModule, MatIconModule, FlexLayoutModule, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription

  constructor(private aurhservice: AuthService){}

  ngOnInit(): void {
    this.authSubscription = this.aurhservice.authchange.subscribe((authstatus)=>{
      this.isAuth = authstatus
    })
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
  }

  onToggleSidenav(){
    this.sidenavToggle.emit()
  }

  onLogout(){
    this.aurhservice.logout()
  }
}
