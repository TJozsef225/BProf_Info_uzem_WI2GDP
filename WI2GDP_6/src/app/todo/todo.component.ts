import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todos!: Todo[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToTodoForm(id: number) {
    this.router.navigate(['todo', id]);
  }

}
