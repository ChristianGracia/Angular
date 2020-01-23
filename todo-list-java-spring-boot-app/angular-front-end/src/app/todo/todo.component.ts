import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  id : number;
  todo: Todo;

  constructor(private todoService: TodoDataService, private route : ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todoService.executeRetrieveTodo('christian', this.id)
    .subscribe(
      data => this.todo = data
    )
    console.log("hi")
  }

  // saveTodo(){
    
  // }

}
