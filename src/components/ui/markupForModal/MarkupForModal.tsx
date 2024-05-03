'use client';
import { MdOutlineStar } from 'react-icons/md';
import { Span, Text } from '../TextNotices';
import { FaRegHeart } from 'react-icons/fa6';
import { LoaderForPage } from '../loader/LoaderForPage';
import { PetInformationForModal } from '@/types/petMoreInformation';
import { FC } from 'react';
import { Rating } from '@mui/material';

interface MarkupForModalProps {
  isLoading: boolean;
  data: PetInformationForModal | null;
  isProfilePage?: boolean;
}

export const MarkupForModal: FC<MarkupForModalProps> = ({
  isLoading,
  data,
  isProfilePage,
}) => {
  return (
    <div className=" flex min-h-[450px] w-[100%]  flex-col items-center justify-center sm:w-[335px] md:w-[473px]">
      {!isLoading && (
        <>
          <div className=" relative">
            <img
              src={data?.imgURL}
              alt={data?.title}
              loading="lazy"
              width="150"
              height="150"
              className=" mb-[24px] max-h-[150px] max-w-[150px] rounded-[100px] object-cover object-center"
            />
            <p className=" absolute left-0 top-0 rounded-[30px] bg-[#fff4df] px-[14px] py-[8px] text-[14px] font-medium capitalize text-[#f6b83d]">
              {data?.category}
            </p>
          </div>
          <h3 className="mb-[10px] text-[18px] font-bold leading-[133%] text-[#2b2b2a]">
            {data?.title}
          </h3>
          <div className=" mb-[20px] flex items-center gap-[5px]">
            <Rating
              value={data?.popularity ?? 0}
              readOnly
              precision={0.5}
              sx={{
                '& .MuiRating-iconFilled': {
                  color: '#ffc531',
                  zIndex: 100,
                  position: 'relative',
                },
              }}
              emptyIcon={<MdOutlineStar style={{ opacity: 0.35 }} />}
            />
            <p className=" flex items-center gap-[5px] text-[16px] font-medium text-[#262626]">
              {data?.popularity}
            </p>
          </div>
          <ul className=" mb-[18px] flex items-center justify-center gap-[20px]">
            <li>
              <Text>
                <Span>Name</Span>
                {data?.name}
              </Text>
            </li>
            <li>
              <Text>
                <Span>Birthday</Span>
                {data?.birthday}
              </Text>
            </li>
            <li>
              <Text>
                <Span>Sex</Span>
                {data?.sex}
              </Text>
            </li>
            <li>
              <Text>
                <Span>Species</Span>
                {data?.species}
              </Text>
            </li>
          </ul>
          <p className=" up mb-[20px] text-[14px] font-medium leading-[129%] tracking-tight text-[#2b2b2a]">
            {data?.comment}
          </p>
          <div className=" mb-[20px] flex flex-col gap-[5px]">
            <p className=" text-[14px] font-medium leading-[129%] tracking-tight text-[#2b2b2a] ">
              <span className=" mr-[5px] text-[#26262680]"> Region:</span>
              {data?.location.stateEn}
            </p>
            <p className=" text-[14px] font-medium leading-[129%] tracking-tight text-[#2b2b2a] ">
              <span className=" mr-[5px] text-[#26262680] ">City:</span>
              {data?.location?.cityEn}
            </p>
          </div>
          <div className="flex items-center gap-[5px] sm:gap-[15px]">
            {!isProfilePage && (
              <button
                type="button"
                className="duration-250 flex items-center gap-[5px] rounded-[30px] bg-[#f6b83d] px-[20px] py-[10px] text-[16px] font-bold text-white transition-colors  ease-in-out hover:bg-[#f9b020] focus:bg-[#f9b020] sm:px-[42px] sm:py-[15px]"
              >
                Add to {<FaRegHeart />}
              </button>
            )}
            <a
              href={`tel:${data?.user.phone}`}
              className="duration-250 rounded-[30px] bg-[#fff4df] px-[20px] py-[10px] text-[16px] font-bold uppercase text-[#f6b83d] transition-colors ease-in-out hover:bg-[#fbe7c1]  focus:bg-[#fbe7c1] sm:px-[42px] sm:py-[15px]"
            >
              Contact
            </a>
          </div>
        </>
      )}
      {isLoading && <LoaderForPage />}
    </div>
  );
};
