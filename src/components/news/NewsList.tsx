'use client';
import { getNews } from '@/redux/news/slice';
import { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri';
import { NewsItem } from './NewsItem';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/actionHooks';
import { CustomPagination } from './PaginationCustom';

export const NewsList = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const news = useAppSelector((state) => state.news.results);
  const count = useAppSelector((state) => state.news.totalPages);

  useEffect(() => {
    dispatch(getNews({ p: page, l: 6 }));
  }, [page]);

  return (
    <section className="py-[96px]">
      <div className="container">
        <div className="max-w-[100%] flex justify-center mb-[60px]">
          <ul className="flex flex-wrap w-[1153px] justify-center gap-x-[32px] gap-y-[40px]">
            <NewsItem items={news} />
          </ul>
        </div>
        <CustomPagination
          count={count}
          page={page}
          onChange={(_, page) => setPage(page)}
          showFirstButton
          showLastButton
          renderItem={(item) => (
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
      </div>
    </section>
  );
};
