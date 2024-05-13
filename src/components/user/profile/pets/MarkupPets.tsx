'use client';
import { Span, Text } from '@/components/ui/TextNotices';
import { INoticesFavorite } from '@/types/user';
import { format } from 'date-fns';
import { MdOutlineStar } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

interface MarkupPetsProps {
  items: INoticesFavorite[] | INoticesFavorite[];
  handelClick: (id: string) => void;
  isFavorite?: boolean;
  onOpenModalFavorite?: (id: string) => void;
}

export const MarkupPets = ({
  items,
  handelClick,
  isFavorite,
  onOpenModalFavorite,
}: MarkupPetsProps) => {
  return (
    <>
      <div className=" max-w-[700px] overflow-scroll sm:h-[450px] md:h-[900px]">
        {!items.length && (
          <h3 className=" max-w-[700px]">
            Oops, <span>looks like there aren`t any furies</span> on our
            adorable page yet. Do not worry! View your pets on the `find your
            favorite pet` page and add them to your favorites.
          </h3>
        )}
        {!!items.length && (
          <ul className=" flex  w-[100%] flex-wrap  justify-center gap-[12px] md:justify-start lg:gap-[24px]">
            {items.map((item: INoticesFavorite | INoticesFavorite) => {
              const data = new Date(item?.birthday);
              const dataFormat = format(data, 'MM.dd.yyyy');
              return (
                <li
                  key={item?._id}
                  className=" flex w-[310px] flex-col justify-center gap-[24px] rounded-[16px] bg-[#fff] p-[24px] sm:w-[335px] lg:w-[320px]"
                >
                  <div className=" grow-[1]">
                    <picture>
                      <source srcSet={item?.imgURL} type="image/webp" />
                      <img
                        src={item?.imgURL}
                        alt={item?.title}
                        loading="lazy"
                        width="292"
                        height="162"
                        className=" mb-[14px] max-h-[178px] rounded-[16px] object-cover object-center"
                      />
                    </picture>

                    <div className=" mb-[8px] flex justify-between">
                      <h3 className=" text-[18px] font-bold leading-[133%] text-[#2b2b2a]">
                        {item?.title}
                      </h3>
                      <p className=" flex items-center gap-[5px] text-[16px] font-medium text-[#262626]">
                        <span>
                          <MdOutlineStar className=" h-[20px] w-[20px] fill-[#FFC531]" />
                        </span>
                        {item?.popularity}
                      </p>
                    </div>
                    <ul className=" mb-[14px] flex items-center justify-center gap-[16px]">
                      <li>
                        <Text>
                          <Span>Name</Span>
                          {item?.name}
                        </Text>
                      </li>
                      <li>
                        <Text>
                          <Span>Birthday</Span>
                          {dataFormat}
                        </Text>
                      </li>
                      <li>
                        <Text>
                          <Span>Sex</Span>
                          {item?.sex}
                        </Text>
                      </li>
                      <li>
                        <Text>
                          <Span>Species</Span>
                          {item?.species}
                        </Text>
                      </li>
                      <li>
                        <Text>
                          <Span>Category</Span>
                          {item?.category}
                        </Text>
                      </li>
                    </ul>
                    <p className=" text-[14px] font-medium leading-[129%] tracking-tight text-[#2b2b2a]">
                      {item?.comment}
                    </p>
                  </div>
                  <div className=" flex items-center gap-[10px]">
                    <button
                      type="button"
                      onClick={() => handelClick(item?._id)}
                      className=" button-active-darker m-auto w-[100%] rounded-[30px] bg-[#f6b83d]  py-[14px] text-[16px] leading-[125%] tracking-[-0.03em] text-[#fff] outline-none"
                    >
                      Learn more
                    </button>
                    {isFavorite && (
                      <button
                        type="button"
                        onClick={() => {
                          if (!!onOpenModalFavorite)
                            onOpenModalFavorite(item?._id);
                        }}
                        className=" button-active-lighter rounded-[30px] bg-[#fff4df] p-[13px]"
                      >
                        <RiDeleteBinLine className=" text-[#F6B83D]" />
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
