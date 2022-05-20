export const parseLocationResponse = (response: any): WeatherApiState['location'] => ({
  ...response,
  tzId: response.tz_id,
  localtimeEpoch: response.localtime_epoch
})

export const parseCurrentResponse = (response: any): WeatherApiState['current'] => ({
  ...response,
  lastUpdatedEpoch: response.last_updated_epoch,
  lastUpdated: response.last_updated,
  tempC: response.temp_c,
  tempF: response.temp_f,
  isDay: response.is_day,
  windMph: response.wind_mph,
  windKph: response.wind_kph,
  windDegree: response.wind_degree,
  windDir: response.wind_dir,
  pressureMb: response.pressure_mb,
  pressureIn: response.pressure_in,
  precipMm: response.precip_mm,
  precipIn: response.precip_in,
  feelslikeC: response.feelslike_c,
  feelslikeF: response.feelslike_f,
  visKm: response.vis_km,
  visMiles: response.vis_miles,
  gustMph: response.gust_mph,
  gustKph: response.gust_kph
})

export const parseAstronomyResponse = (response: any): WeatherApiState['astronomy'] => ({
  ...response,
  moonPhase: response.moon_phase
})
