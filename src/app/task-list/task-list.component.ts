import { Component } from '@angular/core';
import {Task} from "../task/task";
import {FormsModule} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {TaskItemComponent} from "../task-item/task-item.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatIcon,
    FormsModule,
    TaskItemComponent

  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  //TODO Add linting

  value: string = '';

  isDeleteButtonEnabled: boolean = false;
  isEditClicked: boolean = false;

  tasks: Array<Task> = [{
    id: 1,
    title: 'firstTask',
    completed: false
  },
    {
      id: 2,
      title: 'secondTask',
      completed: false
    },
    {
      id: 3,
      title: 'thirdTask',
      completed: false
    }
]

  toggleComplete(selectedTask:Task){
    this.tasks = this.tasks.map(task =>
    task.id === selectedTask.id ? {... task, completed: !task.completed} : task
    )
  }

  addButtonClicked(taskTitle: string) {
    if(taskTitle){
      let idCount = this.tasks.length + 1;
      console.log('id count is', idCount);
      this.tasks.push({
        id: idCount,
        title: taskTitle,
        completed: false
      })
    }
    console.log('The tasks added', this.tasks);
  }

  clearButtonClicked(){
    this.value = '';
  }



  removeTask(selectedTask: Task){
    this.tasks = this.tasks.filter(task =>
    task !== selectedTask
    )
  }

  editTask(editedTask: Task) {
    this.isEditClicked = true;
    this.tasks = this.tasks.map(task =>
      task.id === editedTask.id ? {... task, title: editedTask.title} : task
    )
  }

}
