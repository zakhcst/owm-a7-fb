export interface OwmDataModel {
  city: OwmCityModel;
  cnt: number;
  cod: string;
  list: OwmDataTimeSlotUnitModel[];
  message: number;
  updated?: number;
  listByDate?: {
    [dateValue: string]: OwmDataTimeSlotUnitModel;
  };
}

export interface CoordsModel {
  lat: number;
  lon: number;
}

export interface OwmCityModel {
  coord: CoordsModel;
  country: string;
  id: number;
  name: string;
}

export interface OwmDataTimeSlotUnitModel {
  clouds?: {
    all: number;
  };
  dt: number;
  dt_txt?: string;
  main: {
    grnd_level?: number;
    humidity: number;
    pressure: number;
    sea_level?: number;
    temp: number;
    temp_kf?: number;
    temp_max?: number;
    temp_min?: number;
  };
  rain?: {
    '3h': number;
  };
  sys?: {
    pod: string;
  };
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind: {
    deg: number;
    speed: number;
  };
}
