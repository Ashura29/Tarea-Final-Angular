import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  username: string = '';
  newTaskName: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.username = this.taskService.username;
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (this.newTaskName.trim()) {
      this.taskService.addTask(this.newTaskName);
      this.newTaskName = '';
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }
}