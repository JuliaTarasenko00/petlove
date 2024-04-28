'use client';

import Link from 'next/link';
import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { AuthLink } from '../ui/AuthLink';
import img from '/public/image/not-photo.png';
import { routes } from '@/helpers/routes';

interface IRender {
  mainPage?: boolean;
  auth: boolean;
}

export const RenderAuthComponent = ({ mainPage, auth }: IRender) => {
  const data = useAppSelector((state) => state.user.userFullInformation);
  const image = !data?.avatar ? img.src : data?.avatar;

  return (
    <>
      {auth && (
        <div className=" flex items-center gap-[8px]">
          <img
            src={image}
            alt={data.name}
            width="50"
            height="50"
            className="hidden rounded-[50px] lg:block"
          />
          <Link
            href={routes.user.profile}
            className={`hidden text-[20px] font-bold lg:block ${mainPage ? 'text-[#fff]' : 'text-[#262626]'}`}
          >
            {data.name}
          </Link>
        </div>
      )}
      {!auth && <AuthLink mainPage={mainPage} />}
    </>
  );
};
