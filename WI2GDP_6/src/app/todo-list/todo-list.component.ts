import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  date: Date = new Date();
  todos: Todo[] = [];
  showNewTodo:boolean=false;
  
  successMessage='';
  errorMessage = '';

  unamePattern = /^\d{4}\-\d{2}\-\d{2}$/;
  constructor(private activatedRouter: ActivatedRoute,private formBuilder: FormBuilder, private todoService: TodoService) { }

  todoForm = this.formBuilder.group({
    id: [0],
    name: ['', Validators.required],
    description: [''],
    dueDate: [this.date.getFullYear()+'-'+('0'+(this.date.getMonth()+1)).slice(-2)+'-'+('0'+(this.date.getDate())).slice(-2), Validators.pattern(this.unamePattern)],
    success: [null, Validators.required]
  })

  showTag() {
    this.showNewTodo = true;
  }
  get id() {
    return this.todoForm.controls['id'];
  }


  get name() {
    return this.todoForm.controls['name'];
  }

  get description() {
    return this.todoForm.controls['description'];
  }

  get dueDate() {
    return this.todoForm.controls['dueDate'];
  }

  get success() {
    return this.todoForm.controls['success'];
  }
  async ngOnInit(){
    try {
    this.todos = await this.todoService.getTodos();
    const id = this.activatedRouter.snapshot.paramMap.get('id');
      if (id) {
        const todoUpdate = this.todoService.getTodo(parseInt(id));
        console.log(todoUpdate);
        this.todoForm.setValue(todoUpdate);
      }
      
    } catch (err) {
      console.error(err);
    }
  }

  async createTodo() {
    const todo = this.todoForm.value;
    try {
      if (todo.id) {
        await this.todoService.updateTodo(todo);
        this.successMessage = 'Todo frissítve'
      }
      const insertedTodo = await this.todoService.createTodo(todo);
      console.log(insertedTodo);
      this.successMessage='Todo is inserted with id: ' + insertedTodo.id;
      this.showNewTodo = false;
    } catch(err: any)
    {
      this.errorMessage = err.error.message;
    }
  }

}
