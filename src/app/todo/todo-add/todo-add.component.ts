import {Component, OnInit} from '@angular/core';
import {TodoTypesEnum} from '../todo-types.enum';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass']
})
export class TodoAddComponent implements OnInit {
  types = TodoTypesEnum;
  todo: Todo;
  form: FormGroup;

  constructor(private todoService: TodoService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.todo = new Todo();
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      'type-select': [null, Validators.required],
    });
  }

  saveTodo() {
    this.todo.date = new Date();
    const saved = this.todoService.saveTodo(this.todo);
    if (saved) {
      this.todo = new Todo();
    }
  }
}
