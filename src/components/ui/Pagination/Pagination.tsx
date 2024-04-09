'use client';
import { PaginationItem, PaginationRenderItemParams } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri';
import { CustomPagination } from './PaginationCustom';

interface IPagination {
  count: number;
  page: number;
  setPage: (p: number) => void;
}

export const Pagination = ({ count, page, setPage }: IPagination) => {
  return (
    <CustomPagination
      count={count}
      page={page}
      boundaryCount={0}
      onChange={(_, page: number) => setPage(page)}
      showFirstButton
      showLastButton
      renderItem={(item: PaginationRenderItemParams) => (
        <PaginationItem
          slots={{
            first: RiArrowLeftDoubleFill,
            last: RiArrowRightDoubleFill,
            previous: IoIosArrowBack,
            next: IoIosArrowForward,
          }}
          {...item}
        />
      )}
    />
  );
};
