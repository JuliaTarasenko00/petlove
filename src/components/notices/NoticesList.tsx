'use client';
import { useEffect, useState } from 'react';
import { TitlePage } from '../ui/TitlePage';
import { getNotices } from '@/redux/notices/operation';
import { NoticesItem } from './NoticesItem';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { Pagination } from '../ui/Pagination/Pagination';

export const NoticesList = () => {
  const [page, setPage] = useState<number>(1);
  const noticesList = useAppSelector((state) => state.notices.results);
  const count = useAppSelector((state) => state.notices.totalPages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotices({ p: page }));
  }, [page, dispatch]);

  return (
    <section className="min-h-[100vh] py-[96px]">
      <div className="container">
        <TitlePage>Find your favorite pet</TitlePage>
        <ul className=" flex flex-wrap justify-center gap-x-[32px] gap-y-[40px] mt-[40px]">
          <NoticesItem items={noticesList} />
        </ul>
        <Pagination page={page} setPage={setPage} count={count} />
      </div>
    </section>
  );
};
