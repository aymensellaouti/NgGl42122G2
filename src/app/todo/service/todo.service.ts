import { Injectable } from '@angular/core';
import { Todo } from '../class/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() {}

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  loggerTodo(): void {
    console.log(this.todos);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
