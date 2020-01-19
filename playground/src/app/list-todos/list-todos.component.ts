import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos = [{
    id: 1,
    description: 'Walk the dog'
  }, {
    id: 2,
    description: 'Clean the dog'
  }, {
    id: 3,
    description: 'Feed the dog'
  }, {
    id: 4,
    description: 'Walk the dog'
  }]

  constructor() { }

  ngOnInit() {
  }

}
