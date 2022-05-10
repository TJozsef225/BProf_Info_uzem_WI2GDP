import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Todo } from '../models/todo.model'
;
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return lastValueFrom(this.http.get<Todo[]>('/api/todo'));
  }

  getTodo(id: number) {
    return lastValueFrom(this.http.get<Todo[]>(`/api/todo/${id}`));
  }

  updateTodo(todos: Todo) {
    return lastValueFrom(this.http.put<Todo>('/api/todo', todos))
  }

  createTodo(todos: Todo) {
    return lastValueFrom(this.http.put<Todo>('/api/todo', todos))
  }

  /*deleteTodo(todo: Todo) {
    return lastValueFrom(this.http.delete<Todo>('/todo', todo))
  }*/



}
