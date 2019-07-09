export interface IHistoryLog {
  [dashedIp: string]: IHistoryLogTime;
}

export interface IHistoryLogTime {
  [timeStamp: string]: string;
}
