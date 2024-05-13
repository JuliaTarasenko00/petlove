'use client';
import { NewsResult } from '@/types/news';
import { format } from 'date-fns';

interface NewsItemsProps {
  items: NewsResult[];
}

export const NewsItem = (props: NewsItemsProps) => {
  const { items } = props;
  return (
    <>
      {items.map((item: NewsResult) => {
        const date = format(item.date, 'MM/dd/yyyy');
        return (
          <li
            key={item._id}
            className="flex max-w-[335px] flex-col  gap-[28px]  lg:max-w-[361px]"
          >
            <div className=" grow-[1]">
              <picture>
                <source srcSet={item.imgUrl} type="image/webp" />
                <img
                  loading="lazy"
                  src={item.imgUrl}
                  alt={item.text}
                  width={361}
                  height={226}
                  className=" max-h-[226px] rounded-[15px] object-fill"
                />
              </picture>
              <h3 className="mb-[14px] mt-[28px] text-[20px] font-bold leading-[130%] tracking-tight text-[#262626]">
                {item.title}
              </h3>
              <p className=" mb-[14px] text-[16px] font-medium leading-[125%] tracking-tight text-[#262626]">
                {item.text}
              </p>
            </div>
            <div className="flex justify-between">
              <p className=" mb-[14px] text-[16px] font-medium leading-[125%] tracking-tight text-[#26262680]">
                {date}
              </p>
              <a
                href={item.url}
                target="_blank"
                className="duration-250 mb-[14px] text-[16px] font-medium leading-[125%] tracking-tight text-[#f6b83d] outline-none transition-colors  ease-in-out hover:text-[#fbe7c1] focus:text-[#fbe7c1]"
              >
                Read more
              </a>
            </div>
          </li>
        );
      })}
    </>
  );
};
