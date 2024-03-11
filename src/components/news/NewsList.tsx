'use client';
import { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/actionHooks';
import { TitlePage } from '../ui/TitlePage';
import { Pagination } from '../ui/Pagination/Pagination';
import { SearchForm } from '../ui/SearchForm';
import { getNews } from '@/redux/news/operation';

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
        <div className=" flex justify-between items-center mb-[60px] px-[60px]">
          <TitlePage>News</TitlePage>
          <SearchForm />
        </div>
        <div className="max-w-[100%] flex justify-center mb-[60px]">
          <ul className="flex flex-wrap w-[1153px] justify-center gap-x-[32px] gap-y-[40px]">
            <NewsItem items={news} />
          </ul>
        </div>
        <Pagination count={count} page={page} setPage={setPage} />
      </div>
    </section>
  );
};
