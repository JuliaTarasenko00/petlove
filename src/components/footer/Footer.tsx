import Link from 'next/link';
import { FaHeart } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="container">
      <div className="flex justify-between mb-[20px]">
        <h3 className="text-[#000] flex items-center font-extrabold text-[28px] leading-tight tracking-tighter">
          petl
          <span className="text-[#F6B83D] text-[20px]">
            <FaHeart />
          </span>
          ve
        </h3>
        <div className="flex items-center gap-[10px]">
          <a
            href={'tel:+380(000)000-00-00'}
            className="text-[#000] font-medium text-[16px] leading-tight hover:text-[#f9b020] focus:text-[#f9b020] transition-colors duration-250 ease-in-out"
          >
            +380(000)000-00-00
          </a>
          <a
            href={'mailto:pet_love1@gmail.com'}
            className="text-[#000] font-medium text-[16px] leading-tight hover:text-[#f9b020] focus:text-[#f9b020] transition-colors duration-250 ease-in-out"
          >
            pet_love1@gmail.com
          </a>
        </div>
      </div>

      <p className="text-[#000] font-medium text-[16px] leading-tight">
        ©2024, official site
      </p>
    </div>
  );
}
