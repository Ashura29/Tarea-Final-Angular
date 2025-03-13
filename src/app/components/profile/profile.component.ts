import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class ProfileComponent implements OnInit {
  username: string = '';
  role: string = 'Estudiante de Angular';
  taskCount: number = 0;
  completedTaskCount: number = 0;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.username = this.taskService.username;
    this.taskService.tasks$.subscribe(tasks => {
      this.taskCount = tasks.length;
      this.completedTaskCount = tasks.filter(task => task.completed).length;
    });
  }
  
  updateUsername(newName: string): void {
    if (newName.trim()) {
      this.taskService.username = newName;
      this.username = newName;
    }
  }
}