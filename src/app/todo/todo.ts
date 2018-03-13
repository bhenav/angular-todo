import {TodoTypesEnum} from './todo-types.enum';

export class Todo {
  title: string;
  description: string;
  type: TodoTypesEnum;
  date: Date;
}
