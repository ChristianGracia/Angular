import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  executeGetAllTodosBean(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
  executeDeleteTodo(username, id) {
    return this.http.delete<Todo[]>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  executeRetrieveTodo(username, id) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  executeUpdateTodo(username, id, todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }
  executeCreateTodo(username, todo) {
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
  }



}
