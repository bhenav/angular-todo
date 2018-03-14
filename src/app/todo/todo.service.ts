import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {
  $list: BehaviorSubject<Array<Todo>> = new BehaviorSubject<Array<Todo>>([]);
  $todo: BehaviorSubject<Todo> = new BehaviorSubject<Todo>(new Todo());

  get list(): Array<Todo> {
    return this._list;
  }

  set list(value: Array<Todo>) {
    this._list = value;
  }

  private _list: Array<Todo>;

  constructor() {
    this.list = this.getLocalStorage();
    this.$list.next(this.list);
  }


  addTodo(todo: Todo) {
    let todoInList = this.list.find(item => item.identifier === todo.identifier);
    if (todoInList && todoInList.identifier) {
      this.list = this.list.map((item) => {
        if (item.identifier === todo.identifier) {
          item = todo;
        }
        return item
      });
    } else {
      todo.identifier = 'id-' + Math.round(Math.random() * 132472784138);
      this.list.push(todo);
    }
    this.saveLocalStorage();
    this.$list.next(this.list);
    this.$todo.next(new Todo());
    return true;
  }

  removeTodo(todo: Todo) {
    this.list = this.list.filter((item) => {
      return item.identifier !== todo.identifier;
    });
    this.saveLocalStorage();
    this.$list.next(this.list);
    return true;
  }

  editTodo(todo: Todo) {
    this.$todo.next(todo);
    return true;
  }

  private getLocalStorage() {
    const list = localStorage.getItem('todo-list');
    if (!!list && list !== '') {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  private saveLocalStorage() {
    localStorage.setItem('todo-list', JSON.stringify(this.list));
  }
}
