interface ButtonProps {
  mainPage?: boolean;
  isModal?: boolean;
}

export const AuthButton = ({ mainPage, isModal }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={` ${mainPage ? 'border-[1px] border-[ffffff66]' : 'border-0'} px-[35px] py-[15px] font-bold text-[16px] ${isModal ? 'capitalize' : 'uppercase'} text-white rounded-[30px] bg-[#f6b83d] mr-[5px] hover:bg-[#f9b020] focus:bg-[#f9b020] transition-colors duration-250 ease-in-out`}
      >
        Login
      </button>
      <button
        type="button"
        className={`px-[35px] py-[15px] font-bold text-[16px] uppercase rounded-[30px] bg-[#fff4df] text-[#f6b83d] ${isModal ? 'capitalize' : 'uppercase'} hover:bg-[#fbe7c1] focus:bg-[#fbe7c1]  transition-colors duration-250 ease-in-out`}
      >
        Register
      </button>
    </>
  );
};
