import {Directive, HostListener, Input} from '@angular/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';
import * as _ from 'lodash';

@Directive({
  selector: '[appTodoEdit]'
})
export class TodoEditDirective {

  @Input() todo: Todo;

  @HostListener('click', ['$event']) onClick($event) {
    this.todoService.editTodo(_.extend(new Todo(), this.todo));
  }
  constructor(private todoService: TodoService) {
  }

}
