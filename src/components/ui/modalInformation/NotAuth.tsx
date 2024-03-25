import Image from 'next/image';
import img from '/public/image/icon_dog.png';
import { AuthLink } from '@/components/ui/AuthLink';

export const ModalInformationNotAuth = () => {
  return (
    <div className=" text-center">
      <Image
        src={img}
        width={80}
        height={80}
        priority={true}
        alt="Icon dog"
        className=" mx-auto mb-[20px] block h-[80px] w-[80px]"
      />
      <h3 className="mb-[20px] text-[24px] font-bold text-[#f6b83d]">
        Attention
      </h3>
      <p className="mb-[28px] max-w-[346px] text-center text-[14px] font-medium leading-[129%] tracking-tight text-[#2b2b2a]">
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <AuthLink isModal={true} />
    </div>
  );
};
