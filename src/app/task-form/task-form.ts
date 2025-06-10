import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private taskService: TaskService,
    private toastr: ToastrService
  ) {}

  async submitForm() {
    if (!this.task.title || !this.task.category || !this.task.dueDate) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await this.taskService.addTask(this.task);
      this.toastr.success('Task successfully added!', 'Success 🎉');
      this.task = { title: '', category: '', status: 'Pending', dueDate: '' };
    } catch (err) {
      console.error('Failed to add task:', err);
      this.toastr.error('Failed to add task. Check console.', 'Error ❌');
    }
  }
}
