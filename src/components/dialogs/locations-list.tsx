import { DeleteTwoTone } from '@mui/icons-material'
import { nanoid } from '@reduxjs/toolkit'
import { useTranslation } from 'react-i18next'
import useLocations from '../../hooks/use-locations'
import { Box } from '../atoms/box'
import IconBtn from '../atoms/icon-btn'
import ListItem from '../atoms/list-item'
import { useDialogs } from '../scaffold/context'

function LocationsListDialog() {
  const { t } = useTranslation()
  const { state: { props: { onClick } }, actions: { close } } = useDialogs()
  const { state, actions: { removeLocation } } = useLocations()

  const handleClick = (loc: string) => {
    if (onClick) onClick(loc)
    close()
  }

  const locations = state.list.map((loc) => ({ value: loc, label: loc }))
  locations.unshift({ value: state.geo, label: t('location.current') })

  return (
    <Box sx={{ overflow: 'auto' }}>
      {locations.map(({ value, label }, idx) => (
        <ListItem
          key={nanoid(6)}
          onClick={() => handleClick(value)}
          title={label}
          trailing={(idx > 0
            ? (
              <IconBtn onClick={() => removeLocation(value)}>
                <DeleteTwoTone />
              </IconBtn>
            )
            : undefined
          )}
        />
      ))}
    </Box>
  )
}

export default LocationsListDialog
