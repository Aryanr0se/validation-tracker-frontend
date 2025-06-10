import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form';
import { TaskListComponent } from './task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    TaskFormComponent,
    TaskListComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'validation-tracker-frontend';
}
