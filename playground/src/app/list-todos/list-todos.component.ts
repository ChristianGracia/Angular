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
  todos: Todo[];
  // todos = [new Todo(1, 'Walk the dog', false, new Date()),
  // new Todo(2, 'Clean the dog', false, new Date()),
  // new Todo(3,'Feed the dog',  false, new Date()),
  // new Todo(4, 'Walk the dog',  false, new Date())
  // ]

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.todoService.executeGetAllTodosBean('chris').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
