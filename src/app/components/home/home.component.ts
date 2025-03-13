import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.username = this.taskService.username;
  }
}