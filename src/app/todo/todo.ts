import {TodoTypesEnum} from './todo-types.enum';

export class Todo {
  identifier: string;
  title: string;
  description: string;
  type: TodoTypesEnum;
  date: Date;
}
