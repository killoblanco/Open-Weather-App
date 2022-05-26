import { Theme } from '@emotion/react';
import { CSSProperties, useEffect, useState } from 'react';
import useSettings from '../../hooks/use-settings';
import { Box } from '../atoms/box';
import { SunkenText } from '../atoms/sunken-text';
import SettingsBtn from '../buttons/settings-btn';
import getIconPath from './icon';

const styles = {
  root: (icon: string) => (theme: Theme): any => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url("${icon}")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `${theme.spacing(-3)} center`,
    gap: theme.spacing(8),
    maxWidth: theme.spacing(70),
    alignItems: 'center',
    width: '100%',
  }),
  row: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: theme.spacing(0),
  }),
  text: (theme: Theme): any => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    gap: theme.spacing(0),
    '& > p': { fontSize: theme.spacing(12) },
  }),
};

function RealtimeWeatherInfo({ weather }: { weather: ForecastQueryResponse }) {
  const { state: { degMeasure } } = useSettings();
  const [icon, setIcon] = useState('');

  const currentTemp = degMeasure === 'c' ? weather.current.tempC : weather.current.tempF;

  useEffect(() => {
    setIcon(getIconPath(weather.current.condition.code, !!weather.current.isDay));
  }, [weather]);

  return (
    <Box sx={styles.root(icon)}>
      <Box sx={styles.row}>
        <SunkenText variant="display3">{weather.location.name}</SunkenText>
        <SettingsBtn />
      </Box>
      <Box sx={styles.text}>
        <SunkenText variant="display1">
          {currentTemp}
          º
        </SunkenText>
      </Box>
      <SunkenText variant="h1">{weather.current.condition.text}</SunkenText>
    </Box>
  );
}

export default RealtimeWeatherInfo;
