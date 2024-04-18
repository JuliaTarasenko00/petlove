'use client';

import { FC, useEffect, useState } from 'react';
import { IoClose, IoMenuOutline } from 'react-icons/io5';
import { RenderAuthComponent } from './RenderAuthComponent';
import Link from 'next/link';
import { options } from './data';
import { Options } from './Header';
import { usePathname } from 'next/navigation';
import { routes } from '@/helpers/routes';

interface INavigationForMobile {
  auth: boolean;
}

export const NavigationForMobile: FC<INavigationForMobile> = ({ auth }) => {
  const [open, setOpen] = useState<boolean>(false);
  const location = usePathname();

  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <div className=" block lg:hidden ">
      <button type="button">
        <IoMenuOutline
          onClick={() => setOpen(true)}
          className="h-[36px] w-[36px] text-[#262626]"
        />
      </button>
      {open && (
        <div
          onClick={onClickOverlay}
          className="absolute left-0 right-0 top-0 z-50 h-[100vh] w-[100%] bg-[#80808040]"
        >
          <div className="ml-auto  h-[100vh] w-[218px] bg-[#fff] px-[20px] py-[40px] sm:w-[375px] sm:px-[49px]">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className=" absolute right-[32px] top-[39px] "
            >
              <IoClose className="h-[36px] w-[36px] " />
            </button>
            <div className=" flex h-[100%] flex-col items-center justify-around ">
              <ul className=" flex flex-col items-center justify-start gap-[10px]">
                {options.map((item: Options) => {
                  const { title, href } = item;
                  return (
                    <li
                      key={href}
                      className={` text-center ${
                        location === href
                          ? 'border-[#F6B83D]'
                          : 'border-[rgba(38, 38, 38, 0.15)]'
                      } 'text-[#000] duration-250 w-[120px] rounded-[30px] border-[1px] border-solid px-[20px] py-[15px] text-[14px] font-medium leading-tight outline-none transition-colors ease-in-out  last:mr-0 hover:border-[#F6B83D] focus:border-[#F6B83D]`}
                    >
                      <Link href={href} className=" w-[100%]">
                        {title}
                      </Link>
                    </li>
                  );
                })}
                {auth && (
                  <Link
                    href={routes.user.profile}
                    className={` text-center ${
                      location === routes.user.profile
                        ? 'border-[#F6B83D]'
                        : 'border-[rgba(38, 38, 38, 0.15)]'
                    } 'text-[#000] duration-250 w-[120px] rounded-[30px] border-[1px] border-solid px-[20px] py-[15px] text-[14px] font-medium leading-tight outline-none transition-colors ease-in-out  last:mr-0 hover:border-[#F6B83D] focus:border-[#F6B83D]`}
                  >
                    Profile
                  </Link>
                )}
              </ul>
              <div className="text-center">
                <RenderAuthComponent auth={auth} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
