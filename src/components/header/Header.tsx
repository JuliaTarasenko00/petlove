'use client';

import Link from 'next/link';
import { FaHeart } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { options } from './data';
import { RenderAuthComponent } from './RenderAuthComponent';
import { routes } from '@/helpers/routes';
import { NavigationForMobile } from './NavigationForMobile';

export interface Options {
  title: string;
  href: string;
}

export const Header = () => {
  const location = usePathname();
  const mainPage = location === routes.main.main;
  const auth = false;

  return (
    <div
      className={`container pt-[43px] ${mainPage ? ' absolute left-0 right-0 top-0 w-[95%]' : ' relative'}`}
    >
      <div
        className={`m-auto flex ${mainPage && 'w-[90%]'} items-center justify-between`}
      >
        <Link
          href={routes.main.main}
          className={`${mainPage ? 'text-white' : 'text-[#000]'} flex items-center text-[28px] font-extrabold leading-tight tracking-tighter outline-none`}
        >
          petl
          <span
            className={`${mainPage ? 'text-white' : 'text-[#F6B83D]'} text-[20px]`}
          >
            <FaHeart />
          </span>
          ve
        </Link>
        <nav className=" hidden lg:block">
          {options.map((item: Options) => {
            const { title, href } = item;
            return (
              <Link
                key={href}
                href={href}
                className={`${
                  mainPage
                    ? 'border-[rgba(255, 255, 255, 0.4)]'
                    : location === href
                      ? 'border-[#F6B83D]'
                      : 'border-[rgba(38, 38, 38, 0.15)]'
                } mr-[10px] rounded-[30px] border-[1px] border-solid px-[20px] py-[15px] outline-none last:mr-0 ${mainPage ? 'text-white' : 'text-[#000]'} duration-250 text-[16px] font-medium leading-tight transition-colors  ease-in-out hover:border-[#F6B83D] focus:border-[#F6B83D]`}
              >
                {title}
              </Link>
            );
          })}
        </nav>
        <div>
          <div className=" flex items-center gap-[15px]">
            <div className="hidden items-center gap-[10px] sm:flex">
              <RenderAuthComponent mainPage={mainPage} auth={auth} />
            </div>
            <NavigationForMobile auth={auth} />
          </div>
        </div>
      </div>
    </div>
  );
};
