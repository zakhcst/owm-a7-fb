export interface IOwmData {
  city: IOwmCity;
  cnt: number;
  cod: string;
  list: IOwmDataTimeSlotUnit[];
  message: number;
  updated?: number;
  listByDate?: {
    [dateValue: string]: IOwmDataTimeSlotUnit;
  };
}

export interface IOwmCity {
  coord: ICoords;
  country: string;
  id: number;
  name: string;
}

export interface ICoords {
  lat: number;
  lon: number;
}

export interface IOwmDataTimeSlotUnit {
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
