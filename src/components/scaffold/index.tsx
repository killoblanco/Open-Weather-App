import { Theme } from '@emotion/react'
import { CSSProperties, PropsWithChildren, useEffect } from 'react'
import { useSettings } from '../../hooks/use-settings'
import i18n from '../../locales'
import { Box } from '../atoms/box'
import { ScaffoldCtxProvider } from './context'
import { Dialogs } from './dialogs'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    margin: '0 auto',
    padding: theme.spacing(2)
  })
}

function Scaffold({ children }: PropsWithChildren<unknown>) {
  const { state: { lang } } = useSettings()

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  return (
    <ScaffoldCtxProvider>
      <Box sx={styles.root}>
        {children}
        <Dialogs />
      </Box>
    </ScaffoldCtxProvider>
  )
}

export default Scaffold
