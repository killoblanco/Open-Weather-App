import { useDispatch, useSelector } from 'react-redux'
import { settingsActions, settingsSelectors } from '../duck/settings'
import { AppDispatch } from '../duck/store'
import { ColorPaletteMap } from '../styles/colors'

const useSettings = () => {
  const state = useSelector(settingsSelectors)
  const dispatch = useDispatch<AppDispatch>()

  const actions = {
    setThemeColor: (color: keyof ColorPaletteMap) => dispatch(settingsActions.setThemeColor(color)),
    setDarkMode: (darkMode: boolean) => dispatch(settingsActions.setDarkMode(darkMode)),
    setDegMeasure: (degMeasure: 'c' | 'f') => dispatch(settingsActions.setDegMeasure(degMeasure)),
    setLang: (lang: string) => dispatch(settingsActions.setLang(lang))
  }

  return { state, actions }
}

export default useSettings
