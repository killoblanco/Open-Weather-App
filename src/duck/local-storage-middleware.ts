import { Middleware } from '@reduxjs/toolkit'

export const getLocalStorage = () => JSON.parse(window.localStorage.getItem('owa') || '{}')

const setLocalStorage = (value: string) => window.localStorage.setItem('owa', value)

export const localStorageMiddleware: Middleware = ({ getState, dispatch }) => next => action => {
  const result = next(action)

  const shouldSave = ['settings', 'locations'].some(key => action.type.includes(key))

  if (shouldSave) {
    const { settings, locations } = getState()
    setLocalStorage(JSON.stringify({ settings, locations }))
  }

  return result
}
