'use client';

import { FaHeart } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Options {
  title: string;
  href: string;
}

export const Header = () => {
  const location = usePathname();
  const mainPage = location === '/';

  const options: Options[] = [
    { title: 'News', href: '/news' },
    { title: 'Find pet', href: '/find_pet' },
    { title: ' Our friends', href: '/our_friends' },
  ];

  return (
    <div className="container">
      <div className=" bg-slate-600 flex items-center justify-between">
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
                } border-[1px] border-solid mr-[10px] last:mr-0 px-[20px] py-[15px] rounded-[30px] ${mainPage ? 'text-white' : 'text-[#000]'} font-medium text-[16px] leading-tight`}
              >
                {title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-[10px]">
          <button
            type="button"
            className="px-[35px] py-[15px] font-bold text-[16px] uppercase text-white rounded-[30px] bg-[#f6b83d] mr-[5px] hover:bg-[#f9b020] focus:bg-[#f9b020] transition-colors duration-250 ease-in-out"
          >
            Login
          </button>
          <button
            type="button"
            className="px-[35px] py-[15px] font-bold text-[16px] uppercase rounded-[30px] bg-[#fff4df] text-[#f6b83d] hover:bg-[#fbe7c1] focus:bg-[#fbe7c1]  transition-colors duration-250 ease-in-out"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
