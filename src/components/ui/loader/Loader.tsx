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
    <div className=" absolute bottom-0 left-0 top-0 z-[50000] grid min-h-[100vh] w-[100%] place-items-center overflow-hidden bg-slate-400 bg-loader bg-cover bg-center bg-no-repeat scrollbar-none">
      {loadingProgress > 0 && (
        <span className=" absolute box-border inline-block h-[250px] w-[250px] animate-spin rounded-[50%] border-r-[3px] border-t-[3px] border-r-transparent border-t-[#Fff] md:h-[396px] md:w-[396px]"></span>
      )}
      {loadingProgress <= 0 ? (
        <p className=" text-[60px] font-bold text-[#fff] md:text-[100px]">
          petl💛ve
        </p>
      ) : (
        <p className=" text-[50px] font-bold leading-[100%] text-[#fff] md:text-[80px]">
          {loadingProgress}%
        </p>
      )}
    </div>
  );
};
