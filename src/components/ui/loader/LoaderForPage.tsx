'use client';
import { ThreeDots } from 'react-loader-spinner';

export const LoaderForPage = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#f6b83d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
