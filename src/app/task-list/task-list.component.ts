import { Component } from '@angular/core';
import {Task} from "../task/task";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  //TODO Add linting

  value: string = '';

  isDeleteButtonEnabled: boolean = false;

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

/*  taskItemClicked(){
    this.isDeleteButtonEnabled = !this.isDeleteButtonEnabled;
  }*/

  removeTask(selectedTask: Task){
    this.isDeleteButtonEnabled = true;
    this.tasks = this.tasks.filter(task =>
    task !== selectedTask
    )
    this.isDeleteButtonEnabled = false;
  }
}
