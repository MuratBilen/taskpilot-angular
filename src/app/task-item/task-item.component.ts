import {Component, input, output} from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import { Task } from '../task/task';
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    MatMenuModule, MatButtonModule, MatIconModule, CommonModule, FormsModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  task = input.required<Task>();

  deleteEvent = output<boolean>();
  toggleEvent = output<boolean>();
  editEvent = output<Task>();

  isEditClicked: boolean = false;
  editedTitle: string = '';

  deleteClicked(){
    this.deleteEvent.emit(true);
  }

  toggleClicked(){
    this.toggleEvent.emit(true);
  }

  editClicked() {
    this.isEditClicked = true;
  }

  saveTask(){
    const editedTask: Task = {
      id: this.task().id,
      title: this.editedTitle,
      completed: this.task().completed
    }
    this.editEvent.emit(editedTask);
    this.isEditClicked = false;
  }

  cancel(){
    this.isEditClicked = false;
  }
}
