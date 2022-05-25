import { Theme } from '@emotion/react'
import { CloseTwoTone } from '@mui/icons-material'
import { ComponentType, CSSProperties, lazy, Suspense, useContext, useEffect, useState } from 'react'
import { Box } from '../atoms/box'
import { IconBtn } from '../atoms/icon-btn'
import { Portal } from '../atoms/portal'
import { Text } from '../atoms/text'
import { ScaffoldCtx } from './context'
import { dialogsInitialState } from './context/dialogs'

const styles = {
  root: (theme: Theme): any => ({
    backgroundColor: theme.colors.main[theme.colors.mode].secondaryContainer,
    borderRadius: theme.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    maxWidth: theme.spacing(60),
    maxHeight: '50vh',
    overflow: 'hidden',
    padding: theme.spacing(2,3),
    transition: `all ${theme.transitions.duration.normal} ${theme.transitions.timing}`,
    width: '72%',
  }),
  title: (theme: Theme): any => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': { width: theme.spacing(3) }
  })
}

const DialogContent = (dialog: typeof dialogsInitialState) => {
  const [Content, setContent] = useState<ComponentType | null>(null)

  useEffect(() => {
    if (dialog.open && dialog.content) {
      const content = lazy(() => import((`../dialogs/${dialog.content}`)))
      if (content) {
        setContent(content)
      } else {
        setContent(null)
      }
    }
  }, [dialog.open, dialog.content])

  const Loader = () => <Box>Loading ...</Box>

  return (
    <Suspense fallback={<Loader />}>
      {Content ? <Content /> : null}
    </Suspense>
  )
}

export const Dialogs = () => {
  const { dialogs: { state, actions } } = useContext(ScaffoldCtx)

  return state.open ? (
    <Portal>
      <Box sx={styles.root}>
        <Box sx={styles.title}>
          <Text variant="h3" sx={{ textTransform: 'capitalize' }}>{state.title}</Text>
          <IconBtn onClick={actions.close}>
            <CloseTwoTone fontSize="small" />
          </IconBtn>
        </Box>
        <DialogContent {...state} />
      </Box>
    </Portal>
  ) : null
}
