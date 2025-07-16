import {Component, OnInit} from '@angular/core';
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
export class TaskListComponent implements OnInit {
  //TODO Add linting

  value: string = '';

  isDeleteButtonEnabled: boolean = false;
  isEditClicked: boolean = false;
  tasks: Array<Task> = [];


  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage?.getItem("task-list") ?? '');
  }

  toggleComplete(selectedTask:Task){
    this.tasks = this.tasks.map(task =>
    task.id === selectedTask.id ? {... task, completed: !task.completed} : task
    )
    localStorage.setItem("task-list", JSON.stringify(this.tasks));
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
      localStorage.setItem("task-list", JSON.stringify(this.tasks));
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
    localStorage.setItem("task-list", JSON.stringify(this.tasks));
  }

  editTask(editedTask: Task) {
    this.isEditClicked = true;

    this.tasks = this.tasks.map(task =>
      task.id === editedTask.id ? {... task, title: editedTask.title} : task
    )
    localStorage.setItem("task-list", JSON.stringify(this.tasks));
  }

}
