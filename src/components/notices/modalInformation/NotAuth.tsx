import Image from 'next/image';
import img from '/public/image/icon_dog.png';
import { AuthButton } from '@/components/ui/Button';

export const ModalInformationNotAuth = () => {
  return (
    <div className=" text-center">
      <Image
        src={img}
        width={80}
        height={80}
        priority={true}
        alt="Icon dog"
        className=" block mx-auto mb-[20px] w-[80px] h-[80px]"
      />
      <h3 className="mb-[20px] font-bold text-[#f6b83d] text-[24px]">
        Attention
      </h3>
      <p className="max-w-[346px] mb-[28px] text-[#2b2b2a] text-[14px] font-medium text-center leading-[129%] tracking-tight">
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <AuthButton isModal={true} />
    </div>
  );
};
