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

export const parseForecastDay = (day: any) => ({
  ...day,
  timeEpoch: day.time_epoch,
  tempC: day.temp_c,
  tempF: day.temp_f,
  isDay: day.is_day,
  windMph: day.wind_mph,
  windKph: day.wind_kph,
  windDegree: day.wind_degree,
  windDir: day.wind_dir,
  pressureMb: day.pressure_mb,
  pressureIn: day.pressure_in,
  precipMm: day.precip_mm,
  precipIn: day.precip_in,
  feelslikeC: day.feelslike_c,
  feelslikeF: day.feelslike_f,
  windchillC: day.windchill_c,
  windchillF: day.windchill_f,
  heatindexC: day.heatindex_c,
  heatindexF: day.heatindex_f,
  dewpointC: day.dewpoint_c,
  dewpointF: day.dewpoint_f,
  willItRain: day.will_it_rain,
  chanceOfRain: day.chance_of_rain,
  willItSnow: day.will_it_snow,
  chanceOfSnow: day.chance_of_snow,
  visKm: day.vis_km,
  visMiles: day.vis_miles,
  gustMph: day.gust_mph,
  gustKph: day.gust_kph
})

export const parseForecastResponse = (response: any[]): WeatherApiState['forecast'] => (response || [])
  .map((data: any) => ({
    ...data,
    day: {
      ...data.day,
      maxtempC: data.maxtemp_c,
      maxtempF: data.maxtemp_f,
      mintempC: data.mintemp_c,
      mintempF: data.mintemp_f,
      avgtempC: data.avgtemp_c,
      avgtempF: data.avgtemp_f,
      maxwindMph: data.maxwind_mph,
      maxwindKph: data.maxwind_kph,
      totalprecipMm: data.totalprecip_mm,
      totalprecipIn: data.totalprecip_in,
      avgvisKm: data.avgvis_km,
      avgvisMiles: data.avgvis_miles,
      dailyWillItRain: data.daily_will_it_rain,
      dailyChanceOfRain: data.daily_chance_of_rain,
      dailyWillItSnow: data.daily_will_it_snow,
      dailyChanceOfSnow: data.daily_chance_of_snow
    },
    astro: parseAstronomyResponse(data.astro),
    hour: data.hour.map(parseForecastDay)
  }))
