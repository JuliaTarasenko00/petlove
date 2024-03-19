import Link from 'next/link';

export const FastRedirection = ({
  name,
  link,
  nameLink,
}: {
  name: string;
  link: string;
  nameLink: string;
}) => {
  return (
    <div className=" mt-[16px] flex items-center justify-center gap-[5px]">
      <p className=" text-[14px] font-medium leading-[145%] tracking-[-0.03em] text-[#26262680]">
        {name}
      </p>
      <Link
        href={link}
        className=" duration-250 text-[14px] font-bold leading-[145%] tracking-[-0.03em] text-[#f6b83d] underline
        transition-colors ease-in-out hover:text-[#f9b020] focus:text-[#f9b020]"
      >
        {nameLink}
      </Link>
    </div>
  );
};
