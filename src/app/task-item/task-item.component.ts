import {Component, input, output} from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import { Task } from '../task/task';
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    MatMenuModule, MatButtonModule, MatIconModule,CommonModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  task = input.required<Task>();
  deleteEvent = output<boolean>();
  toggleEvent = output<boolean>();

  deleteClicked(){
    this.deleteEvent.emit(true);
  }

  toggleClicked(){
    this.toggleEvent.emit(true);
  }
}
