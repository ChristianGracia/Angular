import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


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
  todos: Todo[]

  message: string

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.refreshTodos();

  }
  refreshTodos() {
    this.todoService.executeGetAllTodosBean('chris').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );

  }
  deleteTodo(id) {
    this.todoService.executeDeleteTodo('chris', id).subscribe(
      response => {
        console.log(response);
        this.message = 'Delete successful';
        this.refreshTodos();
      }
    )
  }

}

