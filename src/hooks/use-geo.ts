import { useEffect, useState } from 'react'

export const useGeo = () => {
  const [geo, setGeo] = useState<GeolocationPosition | null>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setGeo(position),
      null,
      { enableHighAccuracy: true }
    )
  }, [])

  return geo
}
