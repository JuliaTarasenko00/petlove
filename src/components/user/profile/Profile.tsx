'use client';
import { useState } from 'react';
import { UserInformation } from './userInformation/UserInformation';
import { PetsFavorite } from './pets/PetsFavorite';
import { PetsView } from './pets/PetsView';
import { Tabs } from './tabs/Tabs';

export const Profile = () => {
  // const [show, setShove] = useState(false);

  // const handleChange = (bool: boolean) => {
  //   setShove(bool);
  // };
  const tabs = [
    { title: 'Tab 1', content: <PetsFavorite /> },
    { title: 'Tab 2', content: <PetsView /> },
  ];
  return (
    <section className=" py-[32px]">
      <div className=" container flex justify-between">
        <UserInformation />
        <Tabs tabs={tabs} />
        {/* <div>
          <div>
            <div className=" flex gap-[8px]">
              <button
                type="button"
                onClick={() => {
                  if (show === false) return;
                  return handleChange(false);
                }}
              >
                Favorite
              </button>
              <button
                type="button"
                onClick={() => {
                  if (show === true) return;
                  return handleChange(true);
                }}
              >
                View
              </button>
            </div>
            {show ? <PetsView /> : <PetsFavorite />}
          </div>
        </div> */}
      </div>
    </section>
  );
};
