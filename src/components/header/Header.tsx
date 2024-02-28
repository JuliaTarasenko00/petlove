'use client';

import { FaHeart } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/style/LogoStyle';
import NavLink from '@/style/LinkStyle';

export const Header = () => {
  const location = usePathname();
  const mainPage = location === '/';
  return (
    <div className="container">
      <div className="flex items-center justify-between bg-[#f6b83d]">
        <Logo href="/">
          petl
          <span
            className={`text-[20px] ${mainPage ? 'text-white' : 'text-[#F6B83D]'}`}
          >
            <FaHeart />
          </span>
          ve
        </Logo>
        <nav>
          <NavLink href="/news">News</NavLink>
          <NavLink href="/find_pet">Find pet</NavLink>
          <NavLink href="/our_friends">Our friends</NavLink>
        </nav>
        <div className="flex items-center gap-[10px]">
          <p>Login</p>
          <p>Register</p>
        </div>
      </div>
    </div>
  );
};
