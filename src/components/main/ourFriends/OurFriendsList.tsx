'use client';

import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { getFriends } from '@/redux/friends/operation';
import { useEffect } from 'react';
import { OurFriendsItem } from './OurFriendsItem';
import { TitlePage } from '@/components/ui/TitlePage';
import { Loader } from '@/components/ui/loader/Loader';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const OurFriendsComponent = () => {
  const friendsList = useAppSelector((state) => state.friends.friends);
  const isLoading = useAppSelector((state) => state.friends.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <section className="py-[96px]">
          <div className="container">
            <TitlePage>Our Friends</TitlePage>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className=" mt-[60px] flex flex-wrap  justify-center gap-[20px]"
            >
              <OurFriendsItem items={friendsList} />
            </motion.ul>
          </div>
        </section>
      )}
      {isLoading && <Loader />}
    </>
  );
};
