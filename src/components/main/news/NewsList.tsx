'use client';

import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { getNews, getNewsSearch } from '@/redux/news/operation';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import image from '/public/image/not_found.png';
import { FormValue, SearchForm } from '@/components/ui/SearchForm';
import { TitlePage } from '@/components/ui/TitlePage';
import { NewsItem } from './NewsItem';
import { Pagination } from '@/components/ui/Pagination/Pagination';
import { Loader } from '@/components/ui/loader/Loader';

export const NewsList = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const isLoading = useAppSelector((state) => state.news.isLoading);
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
    <>
      {!isLoading && (
        <section className=" py-[96px]">
          <div className="container">
            <div className=" mb-[60px] flex flex-wrap items-center justify-between gap-[20px]">
              <TitlePage>News</TitlePage>
              <div className="sm:w-[230px]">
                <SearchForm
                  handelSubmitForm={handelSubmitForm}
                  setValue={setValue}
                  setPage={setPage}
                />
              </div>
            </div>
            {news.length > 0 && (
              <>
                <div className="flex max-w-[100%] justify-center">
                  <ul className="flex w-[1153px] flex-wrap justify-center gap-x-[20px] gap-y-[40px] lg:gap-x-[32px]">
                    <NewsItem items={news} />
                  </ul>
                </div>
                <Pagination count={count} page={page} setPage={setPage} />
              </>
            )}
            {news.length <= 0 && value !== '' && (
              <div className=" flex  justify-center">
                <div className=" flex max-w-[900px] flex-wrap items-center justify-center gap-[50px] rounded-[20px] bg-[#f6b83d] p-[20px]">
                  <Image
                    src={image}
                    alt="This name not found"
                    width={300}
                    height={200}
                    className=" w-[300px]"
                  />
                  <h3 className=" text-center text-[24px] font-bold text-[#fff]">
                    Oppppsss! This name "{value}" not found
                  </h3>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
      {isLoading && <Loader />}
    </>
  );
};
