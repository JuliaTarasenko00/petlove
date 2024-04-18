'use client';
import Image from 'next/image';
import img from '/public/image/icon_cat.webp';
import { useAppDispatch } from '@/helpers/hooks/useActionHooks';
import { signOut } from '@/redux/auth/operation';

interface ModalInformationLogOutProps {
  onClose: () => void;
}

export const ModalInformationLogOut = ({
  onClose,
}: ModalInformationLogOutProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" text-center">
      <Image
        src={img}
        alt="Image cat"
        priority={true}
        width={80}
        height={80}
        className="m-auto"
      />
      <h3 className=" mt-[20px] text-[24px] font-bold leading-[117%] tracking-[-0.03em] text-[#262626]">
        Already leaving?
      </h3>
      <div className="mt-[28px]">
        <button
          type="button"
          onClick={() => dispatch(signOut())}
          className=" button-active-darker mr-[8px] rounded-[30px] bg-[#f6b83d] px-[40px] py-[14px]  text-[16px] font-bold  leading-[125%] tracking-[-0.03em] text-[#fff]  sm:px-[57px]"
        >
          Yes
        </button>

        <button
          type="button"
          onClick={() => onClose()}
          className="rounded-[30px] bg-[#2626260d] px-[40px] py-[14px] text-[16px]  font-bold leading-[125%]  tracking-[-0.03em] text-[#262626] sm:px-[57px]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
