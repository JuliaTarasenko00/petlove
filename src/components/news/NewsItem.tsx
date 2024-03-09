import { NewsResult } from '@/types/newsTypes';

interface NewsItemsProps {
  items: NewsResult[];
}

export const NewsItem = (props: NewsItemsProps) => {
  const { items } = props;
  return (
    <>
      {items.map((item: NewsResult) => (
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
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
          <div className="flex justify-between">
            <p>{item.date}</p>
            <a href={item.url} target="_blank">
              Read more
            </a>
          </div>
        </li>
      ))}
    </>
  );
};
