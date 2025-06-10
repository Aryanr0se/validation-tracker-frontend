import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  async ngOnInit() {
    this.loadTasks();
  }

  async loadTasks() {
    try {
      this.tasks = await this.taskService.getTasks();
    } catch (err) {
      console.error('Failed to fetch tasks');
    }
  }

  async deleteTask(id: string) {
    if (!confirm('Are you sure you want to delete this task?')) return;
    try {
      await this.taskService.deleteTask(id);
      this.loadTasks(); // refresh list after delete
    } catch (err) {
      alert('Failed to delete task.');
    }
  }
}
