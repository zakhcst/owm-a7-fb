import { AppHistoryPayloadModel, AppErrorPayloadModel } from './app.models';
import { IOwmData } from '../models/owm-data.model';

export class SetHistoryState {
  static readonly type = '[activity] set';
  constructor(public payload: AppHistoryPayloadModel) {}
}
export class SetErrorsState {
  static readonly type = '[errors] set';
  constructor(public payload: AppErrorPayloadModel) {}
}

export class SetDataState {
  static readonly type = '[data] set';
  constructor(public payload: IOwmData) {}
}

