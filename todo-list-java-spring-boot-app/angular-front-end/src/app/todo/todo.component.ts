import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  id : number;
  todo: Todo;

  constructor(private todoService: TodoDataService, private route : ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1,'', false, new Date());
    this.todoService.executeRetrieveTodo('christian', this.id)
    .subscribe(
      data => this.todo = data
    )
    console.log("hi")
  }

  saveTodo(){
    this.todoService.executeUpdateTodo('christian', this.id, this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todos']);
        }
    )
    
  }

}
