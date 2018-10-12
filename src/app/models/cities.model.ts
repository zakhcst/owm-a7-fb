export interface CityModel {
  name: string;
  country: string;
  iso2: string;
  r?: number;
  u?: number;
}
export interface CitiesModel {
  [cityId: string]: CityModel;
}
export interface CityByKey {
  key?: string;
  value?: CityModel;
}
