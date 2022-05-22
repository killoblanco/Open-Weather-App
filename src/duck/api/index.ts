import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { parseAstronomyResponse, parseCurrentResponse, parseForecastResponse, parseLocationResponse } from './utils'

const buildUrl = (path: string, searchParams: any) => `${path}.json?${new URLSearchParams(searchParams)}`

export const weatherApi = createApi({
  reducerPath: 'api.weather',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://weatherapi-com.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com')
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY)
      return headers
    }
  }),
  endpoints: (builder) => ({
    searchCity: builder.query<WeatherApiState['search'], string>({
      query: (location) => ({
        url: buildUrl('search', { q: location }),
        method: 'GET'
      })
    }),
    realtime: builder.query<{
      location: WeatherApiState['location'],
      current: WeatherApiState['current']
    }, string>({
      query: (location) => ({
        url: buildUrl('current', { q: location }),
        method: 'GET'
      }),
      transformResponse: (response: any) => ({
        location: parseLocationResponse(response.location),
        current: parseCurrentResponse(response.current)
      })
    }),
    astronomy: builder.query<WeatherApiState['astronomy'], string>({
      query: (location) => ({
        url: buildUrl('astronomy', { q: location }),
        method: 'GET'
      }),
      transformResponse: (response: any) => parseAstronomyResponse(response.astronomy.astro)
    }),
    forecast: builder.query<ForecastQueryResponse, string>({
      query: (location) => ({
        url: buildUrl('forecast', { q: location, days: 6 }),
        method: 'GET'
      }),
      transformResponse: (response: any) => ({
        location: parseLocationResponse(response.location),
        current: parseCurrentResponse(response.current),
        forecast: parseForecastResponse(response.forecast.forecastday),
      })
    })
  })
})

export const {
  useSearchCityQuery,
  useRealtimeQuery,
  useAstronomyQuery,
  useForecastQuery,
} = weatherApi
