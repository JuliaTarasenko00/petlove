'use client';

import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { getNews, getNewsSearch } from '@/redux/news/operation';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { TitlePage } from '../ui/TitlePage';
import { SearchForm } from '../ui/SearchForm';
import { NewsItem } from './NewsItem';
import { Pagination } from '../ui/Pagination/Pagination';
import image from '/public/image/not_found.png';

interface FormValue {
  name: string;
}

export const NewsList = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>('');
  const news = useAppSelector((state) => state.news.results);
  const count = useAppSelector((state) => state.news.totalPages);

  useEffect(() => {
    if (value === '') {
      dispatch(getNews({ p: page }));
    } else {
      dispatch(getNewsSearch({ name: value, p: page }));
    }
  }, [page, value, dispatch]);

  const handelSubmitForm = useCallback((values: FormValue) => {
    setValue(values.name);
    setPage(1);
  }, []);

  return (
    <section className=" py-[96px]">
      <div className="container">
        <div className=" flex justify-between items-center mb-[60px] px-[60px]">
          <TitlePage>News</TitlePage>
          <SearchForm
            handelSubmitForm={handelSubmitForm}
            setValue={setValue}
            setPage={setPage}
          />
        </div>
        {news.length > 0 && (
          <>
            <div className="max-w-[100%] flex justify-center">
              <ul className="flex flex-wrap w-[1153px] justify-center gap-x-[32px] gap-y-[40px]">
                <NewsItem items={news} />
              </ul>
            </div>
            <Pagination count={count} page={page} setPage={setPage} />
          </>
        )}
        {news.length <= 0 && value !== '' && (
          <div className=" flex justify-center">
            <div className=" max-w-[900px] flex items-center justify-center gap-[50px] p-[20px] rounded-[20px] bg-[#f6b83d]">
              <Image
                src={image}
                alt="This name not found"
                width={300}
                height={200}
                className=" w-[300px]"
              />
              <h3 className=" font-bold text-[#fff] text-[24px]">
                Oppppsss! This name "{value}" not found
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
