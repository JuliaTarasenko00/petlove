import { routes } from '@/helpers/routes';
import Link from 'next/link';

interface ButtonProps {
  mainPage?: boolean;
  isModal?: boolean;
}

export const AuthLink = ({ mainPage, isModal }: ButtonProps) => {
  return (
    <div className=" flex  flex-wrap justify-center gap-[5px] md:gap-[10px]">
      <Link
        href={routes.main.login}
        className={` w-[100%] outline-none sm:w-max  ${mainPage ? 'border-[1px] border-[ffffff66]' : 'border-0'} px-[35px] py-[15px] text-[16px] font-bold ${isModal ? 'capitalize' : 'uppercase'} button-active-darker rounded-[30px] bg-[#f6b83d] text-white`}
      >
        Login
      </Link>
      <Link
        href={routes.main.register}
        className={` w-[100%] rounded-[30px] bg-[#fff4df] px-[35px] py-[15px] text-[16px] font-bold uppercase text-[#f6b83d] outline-none sm:w-max ${isModal ? 'capitalize' : 'uppercase'} button-active-lighter`}
      >
        Register
      </Link>
    </div>
  );
};
