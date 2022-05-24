import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export const locationsInitialState = {
  geo: 'auto:ip',
  list: [] as string[],
}

export type LocationsState = typeof locationsInitialState

const locationsSlice = createSlice({
  name: 'locations',
  initialState: locationsInitialState,
  reducers: {
    setGeo: (state, action) => {
      state.geo = action.payload
    },
    addLocation: (state, action) => {
      state.list.push(action.payload)
    },
    removeLocation: (state, action) => {
      state.list = state.list.filter(location => location !== action.payload)
    }
  }
})

export const locationsReducer = locationsSlice.reducer
export const locationsActions = locationsSlice.actions
export const locationsSelectors = (state: RootState) => state.locations
