export interface HistoryRecordModel {
  cityId: string;
  time: number;
}
export interface AppHistoryModel {
  ip?: string;
  sessionHistory: HistoryRecordModel[];
}

export interface AppHistoryPayloadModel {
  cityId: string;
  cityName: string;
  countryISO2: string;
}

export interface ErrorRecordModel {
  logMessage: string;
  time: number;
}
export interface AppErrorsStateModel {
  ip?: string;
  sessionErrors: ErrorRecordModel[];
}

export interface AppErrorPayloadModel {
  userMessage: string;
  logMessage: string;
}
