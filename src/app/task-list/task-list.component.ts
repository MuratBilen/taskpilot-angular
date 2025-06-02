import { Component } from '@angular/core';
import {Task} from "../task/task";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
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
    this.tasks.find((task)=>
    task.id=== selectedTask.id
    )
  }
}
