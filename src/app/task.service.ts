import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:5000/api/tasks';

  async getTasks() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async addTask(task: any) {
    const response = await axios.post(this.baseUrl, task);
    return response.data;
  }

  async deleteTask(id: string) {
  try {
    const res = await axios.delete(`http://localhost:3000/api/tasks/${id}`);
    return res.data;
  } catch (err) {
    console.error('Error deleting task:', err);
    throw err;
  }
  }
}