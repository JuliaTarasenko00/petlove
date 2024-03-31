'use client';
import { Friends } from '@/types/friends';

interface OurFriends {
  items: Friends[];
}

export const OurFriendsItem = ({ items }: OurFriends) => {
  return (
    <>
      {items.map(
        ({
          _id,
          imageUrl,
          title,
          email,
          addressUrl,
          address,
          phone,
        }: Friends) => (
          <li
            key={_id}
            className="flex w-[381px] items-center gap-[20px] rounded-[15px] bg-[#fff] px-[20px] py-[40px]"
          >
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              width="90"
              height="90"
              className="h-[90px] w-[90px]"
            />
            <div className=" flex flex-col">
              <h3 className=" mb-[20px] text-[20px] font-bold leading-[130%] tracking-[-0.04em] text-[#262626]">
                {title}
              </h3>
              <ul className=" flex grow-[1] flex-col gap-[5px]">
                <li>
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      target="_blank"
                      className=" duration-250 text-[14px] font-medium leading-[129%] tracking-tight text-[#262626] outline-none transition-colors  ease-in-out hover:text-[#fbe7c1] focus:text-[#fbe7c1]"
                    >
                      <span className=" text-[#26262680]"> Email:</span> {email}
                    </a>
                  )}
                </li>
                <li>
                  {address && (
                    <a
                      href={`${addressUrl}`}
                      target="_blank"
                      className=" duration-250 text-[14px] font-medium leading-[129%] tracking-tight text-[#262626] outline-none transition-colors  ease-in-out hover:text-[#fbe7c1] focus:text-[#fbe7c1]"
                    >
                      <span className=" text-[#26262680]"> Address:</span>{' '}
                      {address}
                    </a>
                  )}
                </li>
                <li>
                  {phone && (
                    <a
                      href={`tel:${phone}`}
                      target="_blank"
                      className=" duration-250 text-[14px] font-medium leading-[129%] tracking-tight text-[#262626] outline-none transition-colors  ease-in-out hover:text-[#fbe7c1] focus:text-[#fbe7c1]"
                    >
                      <span className=" text-[#26262680]">Phone:</span> {phone}
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </li>
        ),
      )}
    </>
  );
};
