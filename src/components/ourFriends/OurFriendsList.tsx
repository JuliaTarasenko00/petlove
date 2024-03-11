'use client';

import { useAppDispatch, useAppSelector } from '@/helpers/hooks/actionHooks';
import { getFriends } from '@/redux/friends/operation';
import { useEffect } from 'react';
import { OurFriendsItem } from './OurFriendsItem';
import { TitlePage } from '../ui/TitlePage';

export const OurFriendsComponent = () => {
  const friendsList = useAppSelector((state) => state.friends.friends);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, []);

  return (
    <section className="py-[96px]">
      <div className="container">
        <TitlePage>Our Friends</TitlePage>
        <ul className=" flex flex-wrap items-center mt-[60px] gap-[20px] justify-center">
          <OurFriendsItem items={friendsList} />
        </ul>
      </div>
    </section>
  );
};
