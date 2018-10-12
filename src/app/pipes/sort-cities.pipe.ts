import { Pipe, PipeTransform } from '@angular/core';
import { CityByKey } from '../models/cities.model';

@Pipe({
  name: 'sortCities'
})
export class SortCitiesPipe implements PipeTransform {

  transform(cities: CityByKey[]): CityByKey[] {
    return cities ? cities.sort((a: CityByKey, b: CityByKey) => (a.value.name < b.value.name ? -1 : 1)) : [];
  }

}
