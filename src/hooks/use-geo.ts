import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { locationsActions } from '../duck/locations'
import { AppDispatch } from '../duck/store'

export const useGeo = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleGeo = (position: GeolocationPosition) => dispatch(
    locationsActions.setGeo(`${position.coords.latitude},${position.coords.longitude}`)
  )

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      handleGeo,
      null,
      { enableHighAccuracy: true }
    )
  }, [])
}
