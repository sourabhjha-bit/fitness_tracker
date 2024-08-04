import { Component, EventEmitter, Output } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-new-training',
  standalone: true,
  imports: [MatCardModule, FlexLayoutModule, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.scss'
})
export class NewTrainingComponent {
  state =  'normal';
 @Output() trainingStart = new EventEmitter<void>()

  onAnimate(){
    this.state == 'normal'? this.state = 'highlighted' : this.state = 'normal'
  }

  onStartTraining(){
    this.trainingStart.emit()
  }

}
