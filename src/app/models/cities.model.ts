export interface ICity {
  name: string;
  country: string;
  iso2: string;
  r?: number;
  u?: number;
  reads?: number;
  updates?: number;
}
export interface ICities {
  [cityId: string]: ICity;
}
export interface ICityByKey {
  key?: string;
  value?: ICity;
}
