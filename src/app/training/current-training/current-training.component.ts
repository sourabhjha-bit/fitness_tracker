import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { StopTrainingComponent } from './Stop-training.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-current-training',
  standalone: true,
  imports: [ MatProgressSpinnerModule, FlexLayoutModule, MatButtonModule, MatDialogModule, StopTrainingComponent ],
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.scss',
})
export class CurrentTrainingComponent implements OnInit{
  @Output() trainingExit = new EventEmitter()
  progress = 0;
  timer! : number;

  constructor(private dialog: MatDialog){
  }

  ngOnInit(){
    this.ResumeTimer()
  }

  ResumeTimer(){
    this.timer = setInterval(()=>{
      this.progress = this.progress + 5;
      if(this.progress >= 100){
        clearInterval(this.timer)
      }
    },1000)
  }

    onStop(){
      clearInterval(this.timer)
     const dialogRef = this.dialog.open(StopTrainingComponent, {data: {
        progress: this.progress
      }})

    dialogRef.afterClosed().subscribe(res =>{
      if(res){
        this.trainingExit.emit()
      }else{
        this.ResumeTimer()
      }
    })
  }
}
