import { Component, Inject } from "@angular/core";
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
  import {MatButtonModule} from '@angular/material/button';

@Component({
 selector: 'app-stop-training',
 template: `<h1 mat-dialog-title>Are you sure?</h1>
            <mat-dialog-content>
                <p>you already got {{ passedData.progress }}%</p>
            </mat-dialog-content>
            <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true">Yes</button>
                <button mat-button [mat-dialog-close]="false">No</button>
            </mat-dialog-actions>`,
 standalone: true,
 imports: [ MatDialogModule, MatDialogActions, MatButtonModule]
})
export class StopTrainingComponent{
    constructor(@Inject(MAT_DIALOG_DATA) public passedData:any){
    }
}