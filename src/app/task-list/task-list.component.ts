import { Component } from '@angular/core';
import {Task} from "../task/task";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    FormsModule
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
    let idCount = this.tasks.length + 1;
    console.log('id count is', idCount);
    this.tasks.push({
      id: idCount,
      title: taskTitle,
      completed: false
    })
    console.log('The tasks added', this.tasks);
  }

  clearButtonClicked(){
    this.value = '';
  }

  taskItemClicked(){
    this.isDeleteButtonEnabled = !this.isDeleteButtonEnabled;
  }

  deleteButtonClicked(){
    
  }
}
