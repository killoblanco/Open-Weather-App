import styled from '@emotion/styled';
import { SettingsTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { routes } from '../../screens/router';

const Btn = styled(Link)(({ theme }) => ({
  padding: theme.spacing(1),
  '& svg': {
    fontSize: theme.spacing(4),
    color: theme.colors.main[theme.colors.mode].secondary,
  },
}));

function SettingsBtn() {
  return (
    <Btn to={routes.settings()}>
      <SettingsTwoTone />
    </Btn>
  );
}

export default SettingsBtn;
