import {Directive, HostListener, Input} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';

@Directive({
  selector: '[appTodoDelete]'
})
export class TodoDeleteDirective {
  @Input() todo: Todo;

  @HostListener('click', ['$event']) onClick($event) {
    this.todoService.removeTodo(this.todo);
  }

  constructor(private todoService: TodoService) {

  }

}
