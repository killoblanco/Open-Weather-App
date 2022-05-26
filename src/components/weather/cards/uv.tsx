import { Theme } from '@emotion/react';
import { WbSunnyTwoTone } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Box } from '../../atoms/box';
import Card from '../../atoms/card';
import { Text } from '../../atoms/text';
import UvMeter from '../meters/uv';

const styles = {
  root: { justifyContent: 'space-between', gap: '0px' },
  row: (theme: Theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
  }),
};

function UvCard({ uv }: { uv: number }) {
  const { t } = useTranslation();

  const description = (idx: number) => {
    if (idx > 2 && idx <= 5) return 'Moderado';
    if (idx > 5 && idx <= 7) return 'Alto';
    if (idx > 7 && idx <= 10) return 'Muy Alto';
    if (idx >= 11) return 'Extremo';
    return 'Bajo';
  };

  return (
    <Card sx={styles.root}>
      <Box sx={styles.row}>
        <WbSunnyTwoTone fontSize="small" />
        <Text variant="subtitle2" sx={{ textTransform: 'uppercase' }}>
          {t('weather.uv')}
        </Text>
      </Box>
      <Text variant="display1" sx={{ textAlign: 'center' }}>{uv}</Text>
      <Text variant="subtitle1" sx={{ textAlign: 'center' }}>{description(uv)}</Text>
      <UvMeter uv={uv} />
    </Card>
  );
}

export default UvCard;
