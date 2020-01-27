import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router'


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];

  message: string;

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos();

  }
  refreshTodos() {
    this.todoService.executeGetAllTodosBean('chris').subscribe(
      response => {
        this.todos = response;
      }
    );

  }
  deleteTodo(id) {
    this.todoService.executeDeleteTodo('chris', id).subscribe(
      response => {
        this.message = 'Delete successful';
        this.refreshTodos();
      }
    )
  }
  updateTodo(id) {
    this.router.navigate(['/todos', id]);
  }
  createTodo(){
    this.router.navigate(['/todos', -1]);

  }



}

