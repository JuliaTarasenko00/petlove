'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const location = usePathname();

  return (
    <>
      {auth && (
        <div className=" flex items-center gap-[8px]">
          <img
            src={image}
            alt={data.name}
            width="50"
            height="50"
            className="hidden h-[50px] w-[50px] rounded-[50px] object-cover object-center lg:block"
          />
          <Link
            href={routes.user.profile}
            className={`hidden text-[20px] font-bold lg:block ${mainPage ? 'text-[#fff]' : 'text-[#262626]'} ${location.includes(routes.user.profile) && 'text-[#F6B83D]'}`}
          >
            {data.name}
          </Link>
        </div>
      )}
      {!auth && <AuthLink mainPage={mainPage} />}
    </>
  );
};
