import { Span, Text } from '@/components/ui/TextNotices';
import { INoticesFavorite } from '@/types/user';
import { format } from 'date-fns';
import { MdOutlineStar } from 'react-icons/md';

interface MarkupPetsProps {
  items: INoticesFavorite[] | INoticesFavorite[];
  handelClick: (id: string) => void;
}

export const MarkupPets = ({ items, handelClick }: MarkupPetsProps) => {
  return (
    <ul className=" flex max-w-[664px] flex-wrap gap-[24px]">
      {items.map((item: INoticesFavorite | INoticesFavorite) => {
        const data = new Date(item?.birthday);
        const dataFormat = format(data, 'MM.dd.yyyy');
        return (
          <li
            key={item?._id}
            className=" flex w-[320px] flex-col justify-center gap-[24px] rounded-[16px] bg-[#fff] p-[24px]"
          >
            <div className=" grow-[1]">
              <img
                src={item?.imgURL}
                alt={item?.title}
                loading="lazy"
                width="292"
                height="162"
                className=" mb-[14px] max-h-[178px] rounded-[16px] object-cover object-center"
              />
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
            <button
              type="button"
              onClick={() => handelClick(item?._id)}
              className=" m-auto max-w-[257px] rounded-[30px] bg-[#f6b83d] px-[80px] py-[14px] text-[16px] leading-[125%] tracking-[-0.03em] text-[#fff] outline-none transition-colors ease-in-out hover:bg-[#f9b020] focus:bg-[#f9b020]"
            >
              Learn more
            </button>
          </li>
        );
      })}
    </ul>
  );
};
