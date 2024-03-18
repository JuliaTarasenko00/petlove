import Link from 'next/link';

interface ButtonProps {
  mainPage?: boolean;
  isModal?: boolean;
}

export const AuthLink = ({ mainPage, isModal }: ButtonProps) => {
  return (
    <>
      <Link
        href="login"
        className={` ${mainPage ? 'border-[1px] border-[ffffff66]' : 'border-0'} px-[35px] py-[15px] text-[16px] font-bold ${isModal ? 'capitalize' : 'uppercase'} duration-250 mr-[5px] rounded-[30px] bg-[#f6b83d] text-white transition-colors ease-in-out hover:bg-[#f9b020] focus:bg-[#f9b020]`}
      >
        Login
      </Link>
      <Link
        href="register"
        className={`rounded-[30px] bg-[#fff4df] px-[35px] py-[15px] text-[16px] font-bold uppercase text-[#f6b83d] ${isModal ? 'capitalize' : 'uppercase'} duration-250 transition-colors  ease-in-out hover:bg-[#fbe7c1] focus:bg-[#fbe7c1]`}
      >
        Register
      </Link>
    </>
  );
};
