import { InputLabel, Select, styled } from '@mui/material';

export const Label = styled(InputLabel)(() => ({
  '&.Mui-focused ': {
    display: 'none',
  },
}));
