import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ConstantsService } from './constants.service';
import { HistoryRecordModel, AppHistoryPayloadModel } from '../states/app.models';
import { Store } from '@ngxs/store';
import { SetHistoryState } from '../states/app.actions';
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private _db: AngularFireDatabase, private _store: Store) {}

  setDataToFB(ip: string, data: HistoryRecordModel) {
    const refKey =
      ConstantsService.historyLog +
      '/' +
      (ip ? ip.replace(/\.|\:/g, '-') : 'ERROR') +
      '/' +
      data.time;
    const ref = this._db.object(refKey);
    return ref.set(data.cityId);
  }

  add(historyLogItem: AppHistoryPayloadModel) {
    this._store.dispatch(new SetHistoryState(historyLogItem));
  }
}
