import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortKeys'
})
export class SortKeysPipe implements PipeTransform {

  transform(value: any, reverse: number = 1): any {
    return value && value.length ? value.sort((a, b) => (a.key < b.key ? (-1 * reverse) : (1 * reverse))) : [];
  }

}
