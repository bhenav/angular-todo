import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], column, term): any {

    return term
      ? items.filter(item => item[column].indexOf(term) !== -1)
      : items;
  }
}
