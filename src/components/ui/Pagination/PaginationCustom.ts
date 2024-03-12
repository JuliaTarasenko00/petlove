import { Pagination, styled } from '@mui/material';

export const CustomPagination = styled(Pagination)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '60px',
  '& .MuiPaginationItem-root': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '44px',
    width: '44px',
    color: '#262626',
    borderRadius: '50%',
    textAlign: 'center',
    border: '1px solid  rgba(38, 38, 38, 0.05)',
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    color: '#fff',
    backgroundColor: '#F6B83D',
    border: '1px solid  #F6B83D',
  },
  '& .MuiPaginationItem-page:hover': {
    color: '#262626',
    border: '1px solid  #F6B83D',
    backgroundColor: 'transparent',
  },
  '& .MuiPaginationItem-previousNext:hover, .MuiPaginationItem-firstLast:hover':
    {
      border: '1px solid  #F6B83D',
      backgroundColor: 'transparent',
    },
}));
