import { createSlice } from '@reduxjs/toolkit'
import { ColorPaletteMap } from '../styles/colors'
import { RootState } from './store'

interface SettingsState {
  color: keyof ColorPaletteMap,
  darkMode: boolean,
  degMeasure: 'c' | 'f',
  lang: string,
}

const initialState: SettingsState = {
  color: 'blue',
  darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  degMeasure: 'c',
  lang: navigator.language
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setThemeColor: (state, action) => {
      state.color = action.payload
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload
    },
    setDegMeasure: (state, action) => {
      state.degMeasure = action.payload
    },
    setLang: (state, action) => {
      state.lang = action.payload
    }
  }
})

export const settingsReducer = settingsSlice.reducer
export const settingsActions = settingsSlice.actions
export const settingsSelectors = (state: RootState) => state.settings
