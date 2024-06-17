import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      titulo: 'crear proyecto',
      completado: false
    },
    {
      id: Date.now(),
      titulo: 'Almorzar',
      completado: false
    },
  ])
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement
    const newTask = input.value
    this.addTask(newTask)
  }
  addTask(titulo: string) {
    const newTask = {
      id: Date.now(),
      titulo,
      completado: false
    }
    this.tasks.update((tasks) => [...tasks, newTask])
  }
  deleteTask(index: Number): void {
    this.tasks.update((tasks) => tasks.filter((task, position) => position != index))
  }
  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completado: !task.completado
          }
        }
        return task;
      })
    })
  }
}
