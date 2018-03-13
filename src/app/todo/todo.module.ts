import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoComponent} from './todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoAddComponent} from './todo-add/todo-add.component';
import {TodoDeleteDirective} from './todo-delete.directive';
import {TodoEditDirective} from './todo-edit.directive';
import {KeysPipe} from '../common/pipes/enum-keys/keys.pipe';
import {TodoService} from './todo.service';
import {FilterPipe} from '../common/pipes/filter/filter.pipe';
import {SortByPipe} from '../common/pipes/sort-by/sort-by.pipe';
import {SharedModule} from '../common/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  }, {
    path: 'list',
    component: TodoListComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [TodoComponent],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoDeleteDirective,
    TodoEditDirective,
    KeysPipe,
    FilterPipe,
    SortByPipe,
  ],
  providers: [TodoService, FormBuilder],
})
export class TodoModule {
}
