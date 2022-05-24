import { Theme } from '@emotion/react'
import { nanoid } from '@reduxjs/toolkit'
import { CSSProperties, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useSettings } from '../../hooks/use-settings'
import { Box } from '../atoms/box'
import ListItem from '../atoms/list-item'
import { ScaffoldCtx } from '../scaffold/context'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    overflow: 'auto'
  })
}

function LangDialog() {
  const { t } = useTranslation()
  const { actions: { setLang } } = useSettings()
  const { dialogs: { actions: { close } } } = useContext(ScaffoldCtx)
  const locales = ['cs', 'da', 'de', 'en', 'es', 'fi', 'fr', 'it', 'nl', 'pl', 'pt']

  const handleClose = (lang: string) => {
    setLang(lang)
    close()
  }

  return (
    <Box sx={styles.root}>
      {locales.map(locale => (
        <ListItem
          key={nanoid(6)}
          onClick={() => handleClose(locale)}
          title={t(`locales.${locale}`)}
        />
      ))}
    </Box>
  )
}

export default LangDialog
