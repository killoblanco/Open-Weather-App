import { Theme } from '@emotion/react'
import { CloseTwoTone } from '@mui/icons-material'
import { CSSProperties, useContext } from 'react'
import { Box } from '../../atoms/box'
import { IconBtn } from '../../atoms/icon-btn'
import { Portal } from '../../atoms/portal'
import { Text } from '../../atoms/text'
import { ScaffoldCtx } from '../context'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    backgroundColor: theme.colors.main[theme.colors.mode].secondaryContainer,
    borderRadius: theme.borderRadius,
    width: 100,
    height: 100
  })
}

export const Dialogs = () => {
  const { dialogs: { state, actions } } = useContext(ScaffoldCtx)

  return state.open ? (
    <Portal>
      <Box sx={styles.root}>
        <Box>
          <Text variant="h3">{state.title}</Text>
          <IconBtn onClick={actions.close}>
            <CloseTwoTone fontSize="small" />
          </IconBtn>
        </Box>
      </Box>
    </Portal>
  ) : null
}
