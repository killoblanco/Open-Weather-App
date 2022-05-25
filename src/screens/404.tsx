import { Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { ChevronLeftTwoTone } from '@mui/icons-material'
import { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Box } from '../components/atoms/box'
import { Text } from '../components/atoms/text'
import { routes } from './router'

const styles = {
  root: (theme: Theme): any => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    height: '100%',
    '& img': { width: '100%', aspectRatio: '1 / 1' }
  }),
  frame: (theme: Theme): CSSProperties => ({
    width: '80%',
    height: 0,
    paddingBottom: '100%',
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
    position: 'relative'
  }),
  text: { maxWidth: '72%', textAlign: 'center' }
}

const Btn = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.borderRadius,
  color: theme.colors.main[theme.colors.mode].primary,
  backgroundColor: `${theme.colors.main[theme.colors.mode].primaryContainer}22`,
  border: `1px solid ${theme.colors.main[theme.colors.mode].primaryContainer}`,
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2, 1, 1),
  cursor: 'pointer',
  textDecoration: 'none',
  textTransform: 'capitalize',
  ...theme.typography.styles.button,
  '& svg': { fill: theme.colors.main[theme.colors.mode].primary }
}))

function NotFoundScreen() {
  const { t } = useTranslation()

  return (
    <Box sx={styles.root}>
      <Box sx={styles.frame}>
        <iframe
          src="https://giphy.com/embed/3o7aCTPPm4OHfRLSH6"
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
      </Box>
      <Text variant="subtitle1" sx={styles.text}>{t('404.label')}</Text>
      <Btn to={routes.main()}>
        <ChevronLeftTwoTone />
        {t('404.back')}
      </Btn>
    </Box>
  )
}

export default NotFoundScreen
