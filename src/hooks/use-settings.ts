import { useDispatch, useSelector } from 'react-redux'
import { settingsActions, settingsSelectors } from '../duck/settings'
import { AppDispatch } from '../duck/store'
import { colors } from '../styles/colors'

export const useSettings = () => {
  const state = useSelector(settingsSelectors)
  const dispatch = useDispatch<AppDispatch>()

  const actions = {
    setThemeColor: (color: keyof typeof colors.palette) => dispatch(settingsActions.setThemeColor(color)),
    setDarkMode: (darkMode: boolean) => dispatch(settingsActions.setDarkMode(darkMode)),
    setDegMeasure: (degMeasure: 'c' | 'f') => dispatch(settingsActions.setDegMeasure(degMeasure)),
    setLang: (lang: string) => dispatch(settingsActions.setLang(lang))
  }

  return { state, actions }
}
