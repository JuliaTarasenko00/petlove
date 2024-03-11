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
            className="flex items-center w-[381px] bg-[#fff] rounded-[15px] py-[40px] px-[20px] gap-[20px]"
          >
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              width="90"
              height="90"
              className="w-[90px] h-[90px]"
            />
            <div>
              <h3 className=" font-bold text-[20px] text-[#262626] tracking-[-0.04em] leading-[130%] mb-[20px]">
                {title}
              </h3>
              <ul className=" flex gap-[5px] flex-col">
                <li>
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      target="_blank"
                      className="  font-medium text-[14px] text-[#262626] tracking-tight leading-[129%] hover:text-[#fbe7c1] focus:text-[#fbe7c1]  transition-colors duration-250 ease-in-out"
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
                      className="  font-medium text-[14px] text-[#262626] tracking-tight leading-[129%] hover:text-[#fbe7c1] focus:text-[#fbe7c1]  transition-colors duration-250 ease-in-out"
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
                      className="  font-medium text-[14px] text-[#262626] tracking-tight leading-[129%] hover:text-[#fbe7c1] focus:text-[#fbe7c1]  transition-colors duration-250 ease-in-out"
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
