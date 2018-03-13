import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {TodoTypesEnum} from './todo-types.enum';

@Injectable()
export class TodoService {
  private _list: Array<Todo>;

  constructor() {
    this._list = this.getLocalStorage();
  }

  get list() {
    return this._list;
  }

  saveTodo(todo: Todo) {
    this._list.push(todo);
    this.saveLocalStorage();
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
    localStorage.setItem('todo-list', JSON.stringify(this._list));
  }
}
