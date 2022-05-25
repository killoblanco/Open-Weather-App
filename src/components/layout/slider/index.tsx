import { AddLocationTwoTone, MenuTwoTone } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { routes } from '../../../screens/router'
import { Box } from '../../atoms/box'
import { IconBtn } from '../../atoms/icon-btn'
import { useDialogs } from '../../scaffold/context'
import { styles } from './styles'

function Slider({ slides }: { slides: { [p: string]: JSX.Element } }) {
  const { t } = useTranslation()
  const { actions } = useDialogs()
  const [cur, setCur] = useState(Object.keys(slides)[0])

  useEffect(() => {
    setCur(Object.keys(slides)[0])
  }, [slides])

  const goTo = (location: string) => setCur(location)

  return (
    <Box sx={styles.root}>
      <Box sx={styles.slides}>
        {slides[cur]}
      </Box>
      <Box sx={styles.dots}>
        <IconBtn
          onClick={() => actions.open({
            title: t('location.list'),
            content: 'locations-list',
            props: { onClick: goTo }
          })}
        >
          <MenuTwoTone />
        </IconBtn>
        <IconBtn as={Link} to={routes.newLocation()}>
          <AddLocationTwoTone fontSize="small" />
        </IconBtn>
      </Box>
    </Box>
  )
}

export default Slider
