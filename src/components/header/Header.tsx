'use client';

import Link from 'next/link';
import { FaHeart } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { options } from './data';
import { RenderAuthComponent } from './RenderAuthComponent';

export interface Options {
  title: string;
  href: string;
}

export const Header = () => {
  const location = usePathname();
  const mainPage = location === '/';
  const auth = false;

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className={`${mainPage ? 'text-white' : 'text-[#000]'} flex items-center font-extrabold text-[28px] leading-tight tracking-tighter`}
        >
          petl
          <span
            className={`${mainPage ? 'text-white' : 'text-[#F6B83D]'} text-[20px]`}
          >
            <FaHeart />
          </span>
          ve
        </Link>
        <nav>
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
                } border-[1px] border-solid mr-[10px] last:mr-0 px-[20px] py-[15px] rounded-[30px] ${mainPage ? 'text-white' : 'text-[#000]'} font-medium text-[16px] leading-tight hover:border-[#F6B83D] focus:border-[#F6B83D]  transition-colors duration-250 ease-in-out`}
              >
                {title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-[10px]">
          <RenderAuthComponent mainPage={mainPage} auth={auth} />
        </div>
      </div>
    </div>
  );
};
