import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'
import { Box } from './box'
import { Text } from './text'

interface ListItemProps {
  icon?: JSX.Element;
  onClick?: () => void;
  subtitle?: string;
  title: string;
  trailing?: JSX.Element;
}

const styles = {
  root: (theme: Theme): any => ({
    cursor: 'pointer',
    display: 'flex',
    gap: theme.spacing(2),
    padding: theme.spacing(2, 0),
    '&:not(:last-of-type)': {
      borderBottom: `1px solid ${theme.colors.main[theme.colors.mode].outline}44`
    }
  }),
  title: { textTransform: 'capitalize' } as CSSProperties,
  text: {
    display: 'flex',
    flex: 1,
    gap: 0
  }
}

function ListItem({ icon, onClick, subtitle, title, trailing }: ListItemProps) {
  return (
    <Box onClick={onClick} role="presentation" sx={styles.root}>
      {icon}
      <Box sx={styles.text}>
        <Text variant="subtitle1" sx={styles.title}>{title}</Text>
        {subtitle ? <Text variant="subtitle2">{subtitle}</Text> : null}
      </Box>
      {trailing}
    </Box>
  )
}

export default ListItem
