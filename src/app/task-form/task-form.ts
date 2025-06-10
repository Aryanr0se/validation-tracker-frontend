import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent {
  task = {
    title: '',
    category: '',
    status: 'Pending',
    dueDate: ''
  };

  constructor(private taskService: TaskService) {}

  async submitForm() {
    if (!this.task.title || !this.task.category || !this.task.dueDate) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await this.taskService.addTask(this.task);
      alert('Task added!');
      window.location.reload();  // reload page to show updated list
    } catch (err) {
      console.error('Failed to add task:', err);
      alert('Failed to add task. Check console for details.');
    }
  }
}
