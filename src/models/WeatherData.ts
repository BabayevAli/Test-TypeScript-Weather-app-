
export class Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}


export class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}


export class Clouds {
  all: number;
}

export class Wind {
  speed: number;
  deg: number;
}

export class Snow {
  _3h: number;
}

export class Sys {
  pod: string;
}

export class WeatherData{
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  snow: Snow;
  sys: Sys;
  dt_txt: string;
}
