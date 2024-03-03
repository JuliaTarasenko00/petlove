interface IRender {
  mainPage: boolean;
  auth: boolean;
}

export const RenderAuthComponent = ({ mainPage, auth }: IRender) => {
  return (
    <>
      {auth && <p>User Data</p>}
      {!auth && (
        <>
          <button
            type="button"
            className={` ${mainPage ? 'border-[1px] border-[ffffff66]' : 'border-0'} px-[35px] py-[15px] font-bold text-[16px] uppercase text-white rounded-[30px] bg-[#f6b83d] mr-[5px] hover:bg-[#f9b020] focus:bg-[#f9b020] transition-colors duration-250 ease-in-out`}
          >
            Login
          </button>
          <button
            type="button"
            className="px-[35px] py-[15px] font-bold text-[16px] uppercase rounded-[30px] bg-[#fff4df] text-[#f6b83d] hover:bg-[#fbe7c1] focus:bg-[#fbe7c1]  transition-colors duration-250 ease-in-out"
          >
            Register
          </button>
        </>
      )}
    </>
  );
};
