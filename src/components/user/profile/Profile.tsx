'use client';

import { UserInformation } from './userInformation/UserInformation';
import { PetsFavorite } from './pets/PetsFavorite';
import { PetsView } from './pets/PetsView';
import { Tabs } from './tabs/Tabs';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { currentUser } from '@/redux/auth/operation';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);
  const tabs = [
    { title: 'My favorite pets', content: <PetsFavorite /> },
    { title: 'Viewed', content: <PetsView /> },
  ];

  useEffect(() => {
    if (token) dispatch(currentUser());
  }, [dispatch, token]);

  return (
    <section className=" py-[32px]">
      <div className=" container flex flex-wrap justify-center gap-[25px] lg:flex-nowrap lg:justify-start">
        <UserInformation />
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};
