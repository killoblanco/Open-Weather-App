import { Theme } from '@emotion/react';
import { nanoid } from '@reduxjs/toolkit';
import {
  ChangeEvent, CSSProperties, useState, useTransition,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box } from '../components/atoms/box';
import ListItem from '../components/atoms/list-item';
import Spinner from '../components/atoms/spinner';
import { Text } from '../components/atoms/text';
import TextField from '../components/atoms/text-field';
import BackBtn from '../components/buttons/back-btn';
import { useSearchCityQuery } from '../duck/api';
import useLocations from '../hooks/use-locations';
import useSettings from '../hooks/use-settings';
import { routes } from './router';

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    margin: '0 auto',
    maxWidth: theme.spacing(70),
    height: `calc(100vh - ${theme.spacing(4)})`,
    paddingBottom: theme.spacing(2),
  }),
  row: (justify?: CSSProperties['justifyContent']) => (theme: Theme): CSSProperties => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: justify || 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2),
  }),
  list: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    flex: 1,
  } as CSSProperties,
};

function NewLocationScreen() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState('');
  const { state: { lang } } = useSettings();
  const { actions: { addLocation } } = useLocations();
  const searchRes = useSearchCityQuery({ q: search, lang });

  const isLoading = searchRes.isLoading || isPending;

  const handleSearch = (value: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearch(value.target.value);
    });
  };

  const handleSelect = (city: string) => {
    addLocation(city);
    navigate(routes.main());
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.row('flex-start')}>
        <BackBtn />
        <Text variant="h4" sx={{ textTransform: 'capitalize' }}>
          {t('location.newLocation')}
        </Text>
      </Box>
      <TextField
        label={t('location.fieldLabel')}
        value={search}
        onChange={handleSearch}
      />
      <Box sx={styles.list}>
        {isLoading
          ? <Spinner size={5} />
          : (searchRes.data || []).map(({ name, region, country }) => (
            <ListItem
              key={nanoid(6)}
              onClick={() => handleSelect(name)}
              title={name}
              subtitle={`${region}, ${country}`}
            />
          ))}
      </Box>
    </Box>
  );
}

export default NewLocationScreen;
