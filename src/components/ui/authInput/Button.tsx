interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="submit"
      className=" duration-250 w-[100%] rounded-[30px] bg-[#f6b83d] py-[16px] text-center text-[16px] font-bold uppercase leading-[125%] tracking-[-0.03em] text-[#fff]
      transition-colors ease-in-out hover:bg-[#f9b020] focus:bg-[#f9b020]"
    >
      {children}
    </button>
  );
};
