import Link from 'next/link';

interface ButtonProps {
  mainPage?: boolean;
  isModal?: boolean;
}

export const AuthLink = ({ mainPage, isModal }: ButtonProps) => {
  return (
    <>
      <Link
        href="/login"
        className={` ${mainPage ? 'border-[1px] border-[ffffff66]' : 'border-0'} px-[35px] py-[15px] text-[16px] font-bold ${isModal ? 'capitalize' : 'uppercase'} button-active-darker mr-[5px] rounded-[30px] bg-[#f6b83d] text-white`}
      >
        Login
      </Link>
      <Link
        href="/register"
        className={`rounded-[30px] bg-[#fff4df] px-[35px] py-[15px] text-[16px] font-bold uppercase text-[#f6b83d] ${isModal ? 'capitalize' : 'uppercase'} button-active-lighter`}
      >
        Register
      </Link>
    </>
  );
};
