import styled from '@emotion/styled'
import { useEffect, useMemo, useState } from 'react'

const codes = {
  day: {
    'clear-cloudy': [1003],
    'drizzle': [1150, 1153, 1168, 1171, 1183, 1186, 1189, 1195],
    'drizzle-sunny': [1063, 1072, 1180, 1192, 1240],
    'fog': [1030, 1135, 1147],
    'hail': [1237, 1261],
    'partly-cloudy': [1006, 1009],
    'sleet': [1069, 1198, 1201, 1204, 1207, 1249, 1252, 1255],
    'snow': [1219, 1222, 1225, 1258, 1264],
    'snow-flurries': [1066, 1210, 1213, 1216, 322],
    'sunny': [1000],
    'thunderstroms-2': [1246, 1276, 1282],
    'thunderstroms-sunny': [1087, 1243, 1273, 1279],
    'windy': [1114, 1117]
  },
  night: {
    'clear-cloudy-night': [1003],
    'drizzle': [1150, 1153, 1168, 1171, 1183, 1186, 1189, 1195],
    'drizzle-night': [1063, 1072, 1180, 1192, 1240],
    'fog': [1030, 1135, 1147],
    'hail': [1237, 1261],
    'cloudy': [1006, 1009],
    'sleet': [1069, 1198, 1201, 1204, 1207, 1249, 1252, 1255],
    'snow': [1219, 1222, 1225, 1258, 1264],
    'snow-flurries': [1066, 1210, 1213, 1216, 322],
    'night': [1000],
    'thunderstroms-2': [1246, 1276, 1282],
    'thunderstroms-sunny-night': [1087, 1243, 1273, 1279],
    'windy': [1114, 1117]
  }
}

const Img = styled.img(({ theme }) => ({
  aspectRatio: '1 / 1',
  maxWidth: theme.spacing(16)
}))

export const getIconPath = (code: number, isDay: boolean) => {
  let icon = 'sunny'

  Object.entries(codes[isDay ? 'day' : 'night'])
    .forEach(([key, value]) => {
      if (value.includes(code)) icon = key
    })

  return import(`../../assets/${icon}.png`)
    .then(({ default: src }) => src)
    .catch(() => import(`../../assets/sunny.png`))
}

function WeatherIcon({ code, isDay }: { code: number, isDay: boolean }) {
  const [path, setPath] = useState('')

  const name = useMemo(() => {
    let icon = 'sunny'
    Object.entries(codes[isDay ? 'day' : 'night'])
      .forEach(([key, value]) => {
        if (value.includes(code)) icon = key
      })
    return icon
  }, [code, isDay])

  useEffect(() => {
    import(`../../assets/${name}.png`)
      .then(path => setPath(path.default))
  }, [name])

  if (!path) return null

  return (<Img src={path} alt={name} />)
}

export default WeatherIcon
