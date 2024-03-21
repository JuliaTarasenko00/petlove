import { MenuItem, Select, styled } from '@mui/material';

export const CustomSelect = styled(Select)(() => ({
  color: '#262626',
  backgroundColor: '#fff',
  borderRadius: '30px',
  border: 'none',
  borderColor: 'transparent',
  outline: 'none',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    borderColor: 'transparent',
  },
}));

export const style = {
  borderRadius: '20px',
  boxShadow: 'none',
  marginTop: '5px',
  maxHeight: '219px',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(38, 38, 38, 0.08)',
    borderRadius: '13px',
  },
};

export const FirstMenuItem = styled(MenuItem)(() => ({
  color: '#262626',
  display: 'none',
}));

export const CustomMenuItem = styled(MenuItem)(() => ({
  color: ' rgba(38, 38, 38, 0.6)',
  '&.MuiMenuItem-root:hover': {
    backgroundColor: 'transparent',
    color: '#f6b83d',
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    color: '#f6b83d',
  },
  '&.Mui-selected:hover': {
    backgroundColor: 'transparent',
  },
}));
