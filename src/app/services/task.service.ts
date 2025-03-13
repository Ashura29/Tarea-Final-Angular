import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../services/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();
  
  // User information
  private _username = '{Usuario}';
  
  constructor() { 
    // Initialize with some sample tasks
    this.tasks = [];
    this.updateTasks();
  }
  
  get username(): string {
    return this._username;
  }
  
  set username(value: string) {
    this._username = value;
  }
  
  getTasks(): Task[] {
    return this.tasks;
  }
  
  addTask(taskName: string): void {
    if (taskName.trim() === '') {
      return;
    }
    
    const newTask: Task = {
      id: this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1,
      name: taskName,
      completed: false
    };
    
    this.tasks.push(newTask);
    this.updateTasks();
  }
  
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.updateTasks();
  }
  
  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.updateTasks();
    }
  }
  
  private updateTasks(): void {
    this.tasksSubject.next([...this.tasks]);
  }
}