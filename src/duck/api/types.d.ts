interface WeatherApiState {
  search: {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    url: string;
  }[];
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tzId: string;
    localtimeEpoch: number;
    localtime: string;
  };
  current: {
    lastUpdatedEpoch: number;
    lastUpdated: string;
    tempC: number;
    tempF: number;
    isDay: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    windMph: number;
    windKph: number;
    windDegree: number;
    windDir: string;
    pressureMb: number;
    pressureIn: number;
    precipMm: number;
    precipIn: number;
    humidity: number;
    cloud: number;
    feelslikeC: number;
    feelslikeF: number;
    visKm: number;
    visMiles: number;
    uv: number;
    gustMph: number;
    gustKph: number;
  };
  astronomy: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moonPhase: string;
    moonIllumination: string;
  };
}
