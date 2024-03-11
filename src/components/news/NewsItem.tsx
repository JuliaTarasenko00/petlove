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
          <li key={item._id} className="flex flex-col max-w-[361px] gap-[28px]">
            <div className=" grow-[1]">
              <img
                loading="lazy"
                src={item.imgUrl}
                alt={item.text}
                width={361}
                height={226}
                className=" rounded-[15px] max-h-[226px] object-fill"
              />
              <h3 className="font-bold text-[#262626] text-[20px] leading-[130%] tracking-tight mt-[28px] mb-[14px]">
                {item.title}
              </h3>
              <p className=" font-medium text-[#262626] text-[16px] leading-[125%] tracking-tight mb-[14px]">
                {item.text}
              </p>
            </div>
            <div className="flex justify-between">
              <p className=" text-[#26262680] font-medium text-[16px] leading-[125%] tracking-tight mb-[14px]">
                {date}
              </p>
              <a
                href={item.url}
                target="_blank"
                className="text-[#f6b83d] font-medium text-[16px] leading-[125%] tracking-tight mb-[14px] hover:text-[#fbe7c1] focus:text-[#fbe7c1]  transition-colors duration-250 ease-in-out"
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
