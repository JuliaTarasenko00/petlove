'use client';
import { NoticesResult } from '@/types/notices';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';
import { useState } from 'react';
import { Span, Text } from '@/components/ui/TextNotices';
import { ModalWindow } from '@/components/ui/modal/Modal';
import { ModalInformationAuth } from '@/components/main/notices/modalInformation/Auth';
import { ModalInformationNotAuth } from '@/components/main/notices/modalInformation/NotAuth';
import { useAppSelector } from '@/helpers/hooks/useActionHooks';

interface INoticesItem {
  items: NoticesResult[];
}

export const NoticesItem = ({ items }: INoticesItem) => {
  const { open, toggleModal } = useToggleModal();
  const [showInform, setShowInform] = useState<boolean>(false);
  const auth = useAppSelector((state) => state.user.token);

  const clickLearnMore = (id: string) => {
    toggleModal();
    if (auth) {
      console.log('id learn more: ', id);
      setShowInform(false);
    } else {
      setShowInform(true);
    }
  };

  const clickFavorite = (id: string) => {
    if (auth) {
      console.log('id favorite: ', id);
      setShowInform(false);
    } else {
      toggleModal();
      setShowInform(true);
    }
  };

  return (
    <>
      {items.map(
        ({
          _id,
          species,
          category,
          title,
          name,
          birthday,
          comment,
          sex,
          imgURL,
          popularity,
        }: NoticesResult) => (
          <li
            key={_id}
            className=" flex w-[310px] flex-col gap-[50px] rounded-[16px] bg-[#fff] p-[24px] sm:w-[335px] md:w-[363px]"
          >
            <div className=" grow-[1]">
              <img
                src={imgURL}
                alt={title}
                loading="lazy"
                width="315"
                height="178"
                className=" mb-[24px] max-h-[178px] rounded-[16px] object-cover object-center"
              />
              <div className=" mb-[8px] flex justify-between">
                <h3 className=" text-[18px] font-bold leading-[133%] text-[#2b2b2a]">
                  {title}
                </h3>
                <p className=" flex items-center gap-[5px] text-[16px] font-medium text-[#262626]">
                  <span>
                    <MdOutlineStar className=" h-[20px] w-[20px] fill-[#FFC531]" />
                  </span>
                  {popularity}
                </p>
              </div>
              <ul className=" mb-[20px] flex items-center justify-center gap-[14px] md:gap-[20px]">
                <li>
                  <Text>
                    <Span>Name</Span>
                    {name}
                  </Text>
                </li>
                <li>
                  <Text>
                    <Span>Birthday</Span>
                    {birthday}
                  </Text>
                </li>
                <li>
                  <Text>
                    <Span>Sex</Span>
                    {sex}
                  </Text>
                </li>
                <li>
                  <Text>
                    <Span>Species</Span>
                    {species}
                  </Text>
                </li>
                <li>
                  <Text>
                    <Span>Category</Span>
                    {category}
                  </Text>
                </li>
              </ul>
              <p className=" text-[14px] font-medium leading-[129%] tracking-tight text-[#2b2b2a]">
                {comment}
              </p>
            </div>
            <div className=" flex items-center justify-between">
              <button
                type="button"
                onClick={() => clickLearnMore(_id)}
                className=" button-active-darker w-[80%] max-w-[100%] rounded-[30px] bg-[#f6b83d]  py-[14px] text-[14px] leading-[125%] tracking-[-0.03em] text-[#fff] outline-none sm:w-[257px] sm:text-[16px]"
              >
                Learn more
              </button>
              <button
                type="button"
                onClick={() => clickFavorite(_id)}
                className=" button-active-lighter rounded-[30px] bg-[#fff4df] p-[15px] outline-none"
              >
                <FaRegHeart className=" h-[18px] w-[18px] fill-[#F6B83D]" />
              </button>
            </div>
          </li>
        ),
      )}
      <ModalWindow onClose={toggleModal} open={open}>
        <>
          {!showInform ? <ModalInformationAuth /> : <ModalInformationNotAuth />}
        </>
      </ModalWindow>
    </>
  );
};
