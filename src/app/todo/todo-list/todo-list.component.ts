import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {TodoTypesEnum} from '../todo-types.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  list: Array<Todo>;
  types = TodoTypesEnum;
  activeTab;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.list = this.todoService.list;
    this.activeTab = Object.keys(TodoTypesEnum)[0];
  }

  updateTab(type: TodoTypesEnum) {
    this.activeTab = type;
  }
}
