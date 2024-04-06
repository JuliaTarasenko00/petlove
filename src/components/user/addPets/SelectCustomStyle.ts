import { MenuItem, Select, styled } from '@mui/material';

export const CustomSelect = styled(Select)(() => ({
  color: '#262626',
  backgroundColor: '#fff',
  textTransform: 'capitalize',
  borderRadius: '30px',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
    borderColor: 'rgba(38, 38, 38, 0.15)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
    borderColor: '#f6b83d',
  },
}));

export const style = {
  borderRadius: '15px',
  border: ' 1px solid rgba(38, 38, 38, 0.15)',
  boxShadow: 'none',
  marginTop: '5px',
  maxHeight: '126px',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

export const CustomMenuItem = styled(MenuItem)(() => ({
  color: ' rgba(38, 38, 38, 0.6)',
  textTransform: 'capitalize',
  '&.MuiMenuItem-root:hover': {
    backgroundColor: 'transparent',
    color: '#f6b83d',
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    borderWidth: '1px',
    color: '#f6b83d',
    borderColor: '#f6b83d',
  },
  '&.Mui-selected:hover': {
    backgroundColor: 'transparent',
  },
}));
