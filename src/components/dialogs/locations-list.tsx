import { Theme } from '@emotion/react'
import { nanoid } from '@reduxjs/toolkit'
import { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocations } from '../../hooks/use-locations'
import { Box } from '../atoms/box'
import ListItem from '../atoms/list-item'
import { useDialogs } from '../scaffold/context'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    overflow: 'auto'
  })
}

function LocationsListDialog() {
  const { t } = useTranslation()
  const { state: { props }, actions: { close } } = useDialogs()
  const { state } = useLocations()

  const handleClick = (loc: string) => {
    if (props.onClick) props.onClick(loc)
    close()
  }

  const locations = state.list.map((loc) => ({ value: loc, label: loc }))
  locations.unshift({ value: state.geo, label: t('locations.current') })

  return (
    <Box sx={styles.root}>
      {locations.map(({ value, label }) => (
        <ListItem
          key={nanoid(6)}
          onClick={() => handleClick(value)}
          title={label}
        />
      ))}
    </Box>
  )
}

export default LocationsListDialog
