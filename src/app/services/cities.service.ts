import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { from, Observable } from 'rxjs';
import { switchMap, take, share } from 'rxjs/operators';
import { CityModel, CitiesModel } from '../models/cities.model';

@Injectable({
  providedIn: 'root'
})

export class CitiesService {
  constructor(private _db: AngularFireDatabase) {}

  getData(): Observable<CitiesModel> {
    return from(this._db.object<CitiesModel>('/cities').valueChanges());
  }

  updateReads(cityId: string) {
    const ref = this._db.object(`/cities/${cityId}`);
    return ref.valueChanges().pipe(
      take(1),
      switchMap((city: CityModel) => {
        return from(ref.update({ r: (city.r || 0) + 1 }));
      })
    );
  }
}
