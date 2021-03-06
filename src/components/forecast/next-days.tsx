import { Theme } from '@emotion/react';
import { AcUnitTwoTone, LocalFireDepartmentTwoTone } from '@mui/icons-material';
import { nanoid } from '@reduxjs/toolkit';
import { CSSProperties } from 'react';
import useSettings from '../../hooks/use-settings';
import { parseRelativeTime } from '../../utils/date-time';
import { Box } from '../atoms/box';
import { Text } from '../atoms/text';

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    maxWidth: theme.spacing(70),
    width: '100%',
  }),
  row: (theme: Theme): any => ({
    alignItems: 'center',
    display: 'flex',
    gap: theme.spacing(4),
    justifyContent: 'space-between',
    '&:not(:last-child)': {
      borderBottom: `solid 1px ${theme.colors.main[theme.colors.mode].outline}44`,
      paddingBottom: theme.spacing(2),
    },
    '& > img': { width: theme.spacing(4), height: theme.spacing(4) },
    '& > p': { flex: 1 },
  }),
  title: { textTransform: 'capitalize' } as CSSProperties,
  temp: (theme: Theme): CSSProperties => ({
    display: 'flex',
    gap: theme.spacing(1),
  }),
};

function ForecastNextDays({ forecast }: { forecast: WeatherApiState['forecast'] }) {
  const { state: { degMeasure } } = useSettings();

  const minTemp = (day: any): number => (degMeasure === 'c' ? day.mintempC : day.mintempF);
  const maxTemp = (day: any): number => (degMeasure === 'c' ? day.maxtempC : day.maxtempF);

  return (
    <Box sx={styles.root}>
      {forecast.map((day) => (
        <Box sx={styles.row} key={nanoid((6))}>
          <Text variant="subtitle1" sx={styles.title}>{parseRelativeTime(day.date)}</Text>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <Box sx={styles.temp}>
            <AcUnitTwoTone fontSize="small" />
            <Text variant="subtitle2">
              {minTemp(day.day)}
              º
            </Text>
          </Box>
          <Box sx={styles.temp}>
            <Text variant="subtitle2">
              {maxTemp(day.day)}
              º
            </Text>
            <LocalFireDepartmentTwoTone fontSize="small" />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ForecastNextDays;
