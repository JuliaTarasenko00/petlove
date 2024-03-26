import Image from 'next/image';
import img from '/public/image/icon_cat.webp';

interface ModalInformationProps {
  onClose: () => void;
}

export const ModalInformation = ({ onClose }: ModalInformationProps) => {
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
          className=" button-active-darker mr-[8px] rounded-[30px] bg-[#f6b83d] px-[57px]  py-[14px] text-[16px]  font-bold leading-[125%] tracking-[-0.03em]  text-[#fff]"
        >
          Yes
        </button>

        <button
          type="button"
          onClick={() => onClose()}
          className=" mr-[8px] rounded-[30px] bg-[#2626260d] px-[57px] py-[14px]  text-[16px] font-bold  leading-[125%] tracking-[-0.03em] text-[#262626]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
