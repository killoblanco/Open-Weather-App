import { AddLocationTwoTone, ChevronLeftTwoTone, ChevronRightTwoTone, MyLocationTwoTone } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../screens/router'
import { Box } from '../../atoms/box'
import { IconBtn } from '../../atoms/icon-btn'
import { styles } from './styles'

function Slider({ slides }: { slides: JSX.Element[] }) {
  const [cur, setCur] = useState(0)

  const isFirst = cur === 0
  const isLast = cur === slides.length - 1

  const goTo = (i: number) => setCur(i)

  const goNext = () => {
    if (!isLast) goTo(cur + 1)
  }
  const goPrev = () => {
    if (!isFirst) goTo(cur - 1)
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.slides}>
        {slides[cur]}
      </Box>
      <Box sx={styles.dots}>
        {!isFirst ? (<IconBtn onClick={() => goTo(0)}>
          <MyLocationTwoTone />
        </IconBtn>) : null}
        {(cur > 1) ? (<IconBtn onClick={goPrev}>
          <ChevronLeftTwoTone />
        </IconBtn>) : null}
        {!isLast ? (<IconBtn onClick={goNext}>
          <ChevronRightTwoTone />
        </IconBtn>) : null}
        <IconBtn as={Link} to={routes.newLocation()}>
          <AddLocationTwoTone />
        </IconBtn>
      </Box>
    </Box>
  )
}

export default Slider
