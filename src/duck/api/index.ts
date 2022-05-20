import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { parseAstronomyResponse, parseCurrentResponse, parseLocationResponse } from './utils'

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
        url: `search.json?${new URLSearchParams({ q: location })}`,
        method: 'GET'
      })
    }),
    realtime: builder.query<{
      location: WeatherApiState['location'],
      current: WeatherApiState['current']
    }, string>({
      query: (location) => ({
        url: `current.json?${new URLSearchParams({ q: location })}`,
        method: 'GET'
      }),
      transformResponse: (response: any) => ({
        location: parseLocationResponse(response.location),
        current: parseCurrentResponse(response.current)
      })
    }),
    astronomy: builder.query<WeatherApiState['astronomy'], string>({
      query: (location) => ({
        url: `astronomy.json?${new URLSearchParams({ q: location })}`,
        method: 'GET'
      }),
      transformResponse: (response: any) => parseAstronomyResponse(response.astronomy.astro)
    })
  })
})

export const {
  useSearchCityQuery,
  useRealtimeQuery,
  useAstronomyQuery,
} = weatherApi
