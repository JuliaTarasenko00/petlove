'use client';
import { useEffect, useState } from 'react';
import { getNotices, getNoticesFilter } from '@/redux/notices/operation';
import { NoticesItem } from './NoticesItem';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { Filter } from './filter/Filter';
import { TitlePage } from '@/components/ui/TitlePage';
import { Pagination } from '@/components/ui/Pagination/Pagination';
import { Loader } from '@/components/ui/loader/Loader';

export interface TState {
  name: string;
  check: null | boolean;
  type: string;
}

export const NoticesList = () => {
  const dispatch = useAppDispatch();
  const noticesList = useAppSelector((state) => state.notices.results);
  const isLoading = useAppSelector((state) => state.notices.isLoading);
  const count = useAppSelector((state) => state.notices.totalPages);
  const [page, setPage] = useState<number>(1);
  const [selectedButton, setSelectedButton] = useState<TState>({
    name: '',
    check: null,
    type: '',
  });
  const [selected, setSelected] = useState({
    category: '',
    species: '',
  });
  const [selectedName, setSelectedName] = useState<string>('');
  const isFilter =
    !!Object.values(selected).join('') ||
    !!selectedName ||
    !!selectedButton.name;

  useEffect(() => {
    if (isFilter) {
      dispatch(
        getNoticesFilter({
          ...selected,
          p: page,
          name: selectedName,
          type: selectedButton.check !== null && selectedButton.type,
          isSelected: selectedButton.check ?? '',
        }),
      );
      return;
    } else {
      dispatch(getNotices({ p: page }));
      return;
    }
  }, [page, selectedName, selectedButton, selected, dispatch]);

  return (
    <>
      <section className="min-h-[100vh] py-[96px]">
        <div className="container">
          <TitlePage>Find your favorite pet</TitlePage>

          <Filter
            setSelectedButton={setSelectedButton}
            setSelected={setSelected}
            setSelectedName={setSelectedName}
            selectedButton={selectedButton}
          />

          <ul className=" mt-[40px] flex flex-wrap justify-center gap-x-[32px] gap-y-[40px]">
            <NoticesItem items={noticesList} />
          </ul>
          <Pagination page={page} setPage={setPage} count={count} />
        </div>
      </section>
      {isLoading && <Loader />}
    </>
  );
};
