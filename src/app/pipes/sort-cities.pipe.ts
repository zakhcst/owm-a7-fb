import { Pipe, PipeTransform } from '@angular/core';
import { ICityByKey } from '../models/cities.model';

@Pipe({
  name: 'sortCities'
})
export class SortCitiesPipe implements PipeTransform {

  transform(cities: ICityByKey[]): ICityByKey[] {
    return cities ? cities.sort((a: ICityByKey, b: ICityByKey) => (a.value.name < b.value.name ? -1 : 1)) : [];
  }

}
