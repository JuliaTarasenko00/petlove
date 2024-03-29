'use client';
import { useState } from 'react';
import { UserInformation } from './userInformation/UserInformation';
import { PetsFavorite } from './pets/PetsFavorite';
import { PetsView } from './pets/PetsView';
import { Tabs } from './tabs/Tabs';

export const Profile = () => {
  const tabs = [
    { title: 'Favorite', content: <PetsFavorite /> },
    { title: 'View', content: <PetsView /> },
  ];
  return (
    <section className=" py-[32px]">
      <div className=" container flex justify-center gap-[32px]">
        <UserInformation />
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};
