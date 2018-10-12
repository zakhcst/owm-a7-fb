import { AppHistoryPayloadModel, AppErrorPayloadModel } from './app.models';

export class SetHistoryState {
  static readonly type = '[activity] set';
  constructor(public payload: AppHistoryPayloadModel) {}
}
export class SetErrorsState {
  static readonly type = '[errors] set';
  constructor(public payload: AppErrorPayloadModel) {}
}
