'use client';

import { useEffect, useState } from 'react';

export const Loader = () => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 5;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" absolute left-0 top-0 z-[50000] grid h-[100vh] w-[100%] place-items-center overflow-hidden bg-slate-400 bg-loader bg-cover bg-center bg-no-repeat scrollbar-none">
      {loadingProgress > 0 && (
        <span className=" absolute box-border inline-block h-[396px] w-[396px] animate-spin rounded-[50%] border-r-[3px] border-t-[3px] border-r-transparent border-t-[#Fff]"></span>
      )}
      {loadingProgress <= 0 ? (
        <p className=" text-[100px] font-bold text-[#fff]">petl💛ve</p>
      ) : (
        <p className=" text-[80px] font-bold leading-[100%] text-[#fff]">
          {' '}
          {loadingProgress}%
        </p>
      )}
    </div>
  );
};
