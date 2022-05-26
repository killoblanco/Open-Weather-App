import { useDispatch, useSelector } from 'react-redux'
import { locationsActions, locationsSelectors } from '../duck/locations'
import { AppDispatch } from '../duck/store'

const useLocations = () => {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector(locationsSelectors)

  const actions = {
    addLocation: (location: string) => dispatch(locationsActions.addLocation(location)),
    removeLocation: (location: string) => dispatch(locationsActions.removeLocation(location))
  }

  return { state, actions }
}

export default useLocations
