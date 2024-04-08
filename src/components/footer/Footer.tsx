import { FaHeart } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="container">
      <div className="mb-[20px] flex flex-wrap justify-between gap-y-3">
        <h3 className="flex  items-center text-[28px] font-extrabold leading-tight tracking-tighter text-[#000]">
          petl
          <span className="text-[20px] text-[#F6B83D]">
            <FaHeart />
          </span>
          ve
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-[10px] gap-y-3">
          <a
            href={'tel:+380(000)000-00-00'}
            className="duration-250 text-[16px] font-medium leading-tight text-[#000] outline-none transition-colors ease-in-out hover:text-[#f9b020] focus:text-[#f9b020]"
          >
            +380(000)000-00-00
          </a>
          <a
            href={'mailto:pet_love1@gmail.com'}
            className="duration-250 text-[16px] font-medium leading-tight text-[#000] outline-none transition-colors ease-in-out hover:text-[#f9b020] focus:text-[#f9b020]"
          >
            pet_love1@gmail.com
          </a>
        </div>
      </div>

      <p className="text-[16px] font-medium leading-tight text-[#000]">
        ©2024, official site
      </p>
    </div>
  );
}
