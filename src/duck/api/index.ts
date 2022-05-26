import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  parseAstronomyResponse, parseCurrentResponse, parseForecastResponse, parseLocationResponse,
} from './utils';

interface SearchParams {
  q: string;
  lang: string;
  days: number;
}

const buildUrl = (
  path: string,
  searchParams: Partial<SearchParams>,
) => `${path}.json?${new URLSearchParams(searchParams as URLSearchParams)}`;

export const weatherApi = createApi({
  reducerPath: 'api.weather',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://weatherapi-com.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchCity: builder.query<WeatherApiState['search'], Partial<SearchParams>>({
      query: (params) => ({
        url: buildUrl('search', params),
        method: 'GET',
      }),
    }),
    realtime: builder.query<{
      location: WeatherApiState['location'],
      current: WeatherApiState['current']
    }, Partial<SearchParams>>({
      query: (params) => ({
        url: buildUrl('current', params),
        method: 'GET',
      }),
      transformResponse: (response: any) => ({
        location: parseLocationResponse(response.location),
        current: parseCurrentResponse(response.current),
      }),
    }),
    astronomy: builder.query<WeatherApiState['astronomy'], Partial<SearchParams>>({
      query: (params) => ({
        url: buildUrl('astronomy', params),
        method: 'GET',
      }),
      transformResponse: (response: any) => parseAstronomyResponse(response.astronomy.astro),
    }),
    forecast: builder.query<ForecastQueryResponse, Partial<SearchParams>>({
      query: (params) => ({
        url: buildUrl('forecast', { ...params, days: 6 }),
        method: 'GET',
      }),
      transformResponse: (response: any) => ({
        location: parseLocationResponse(response.location),
        current: parseCurrentResponse(response.current),
        forecast: parseForecastResponse(response.forecast.forecastday),
      }),
    }),
  }),
});

export const {
  useSearchCityQuery,
  useRealtimeQuery,
  useAstronomyQuery,
  useForecastQuery,
} = weatherApi;
