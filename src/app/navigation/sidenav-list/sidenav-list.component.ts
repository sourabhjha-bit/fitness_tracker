import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav-list',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatListModule, FlexLayoutModule, RouterModule, CommonModule],
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.scss'
})
export class SidenavListComponent implements OnInit, OnDestroy {
  isAuth = false;
  authsubscription: Subscription

  @Output() closeSidenav = new EventEmitter<void>();

  constructor( private authservice:AuthService){
  }

  ngOnInit(): void {
    this.authsubscription = this.authservice.authchange.subscribe((authstatus =>
      this.isAuth = authstatus
    ))  
  }

  ngOnDestroy(): void {
    this.authsubscription.unsubscribe()
  }

  onClose(){
    this.closeSidenav.emit()
  }

  OnLogout(){
    this.authservice.logout()
    this.onClose()
  }
}
