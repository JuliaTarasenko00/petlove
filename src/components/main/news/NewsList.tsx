'use client';

import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { getNews, getNewsSearch } from '@/redux/news/operation';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { TitlePage } from '@/components/ui/TitlePage';
import { NewsItem } from './NewsItem';
import { Pagination } from '@/components/ui/Pagination/Pagination';
import { Loader } from '@/components/ui/loader/Loader';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoIosClose } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { SearchInput } from '@/components/ui/input/SearchInput';
import { FilterNotFound } from '@/components/ui/filterNotFound/FilterNotFound';

export type FormValues = {
  name: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Minimum number of characters is 3')
    .max(10, 'Too Long! Maximum number of characters is 10')
    .required(),
});

export const NewsList = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.news.isLoading);
  const news = useAppSelector((state) => state.news.results);
  const count = useAppSelector((state) => state.news.totalPages);

  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (searchValue) {
      dispatch(getNewsSearch({ name: searchValue, p: page }));
    } else {
      dispatch(getNews({ p: page }));
    }
  }, [dispatch, page, searchValue]);

  const handleSearchSubmit = handleSubmit((formValues) => {
    setSearchValue(formValues.name);
    setPage(1);
  });

  const handleClearSearch = () => {
    reset();
    setSearchValue('');
    setPage(1);
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className=" py-[96px]">
        <div className="container">
          <div className=" mb-[60px] flex flex-wrap items-center justify-between gap-[20px]">
            <TitlePage>News</TitlePage>
            <div className="sm:w-[230px]">
              <form onSubmit={handleSearchSubmit} className=" relative">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <SearchInput
                      {...field}
                      errorMessage={errors.name?.message}
                      placeholder="Search"
                      handleClearSearch={handleClearSearch}
                    />
                  )}
                />

                <button
                  type="submit"
                  disabled={!!errors.name?.message}
                  className=" absolute right-[14px] top-[50%] translate-y-[-50%] disabled:cursor-no-drop"
                >
                  <IoSearch className="duration-250 h-[18px] w-[18px] fill-[#262626] transition-colors  ease-in-out hover:fill-[#f1b84d] focus:fill-[#f1b84d]" />
                </button>
              </form>
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
          {news.length <= 0 && searchValue !== '' && (
            <FilterNotFound name={searchValue} />
          )}
        </div>
      </section>
    </>
  );
};
