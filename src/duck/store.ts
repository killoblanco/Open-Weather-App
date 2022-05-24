import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherApi } from './api'
import { locationsReducer } from './locations'
import { settingsReducer } from './settings'

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    settings: settingsReducer,
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(weatherApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
