'use client';
import { NoticesResult } from '@/types/notices';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import { Span, Text } from '../ui/TextNotices';
import { ModalWindow } from '../ui/modal/Modal';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';
import { ModalInformationAuth } from './modalInformation/Auth';
import { ModalInformationNotAuth } from './modalInformation/NotAuth';
import { useState } from 'react';

interface INoticesItem {
  items: NoticesResult[];
}

export const NoticesItem = ({ items }: INoticesItem) => {
  const { open, toggleModal } = useToggleModal();
  const [showInform, setShowInform] = useState<boolean>(false);
  const auth = false;

  const clickLearnMore = (id: string) => {
    toggleModal();
    if (auth) {
      console.log('id: ', id);
      setShowInform(false);
    } else {
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
            className=" w-[363px] p-[24px] rounded-[16px] bg-[#fff] flex flex-col gap-[50px]"
          >
            <div className=" grow-[1]">
              <img
                src={imgURL}
                alt={title}
                loading="lazy"
                width="315"
                height="178"
                className=" rounded-[16px] max-h-[178px] object-cover object-center mb-[24px]"
              />
              <div className=" flex justify-between mb-[8px]">
                <h3 className=" font-bold text-[18px] text-[#2b2b2a] leading-[133%]">
                  {title}
                </h3>
                <p className=" flex items-center gap-[5px] text-[#262626] text-[16px] font-medium">
                  <span>
                    <MdOutlineStar className=" fill-[#FFC531] w-[20px] h-[20px]" />
                  </span>
                  {popularity}
                </p>
              </div>
              <ul className=" flex items-center justify-center gap-[20px] mb-[20px]">
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
              <p className=" font-medium text-[14px] text-[#2b2b2a] tracking-tight leading-[129%]">
                {comment}
              </p>
            </div>
            <div className=" flex justify-between items-center">
              <button
                type="button"
                onClick={() => clickLearnMore(_id)}
                className=" max-w-[257px] bg-[#f6b83d] rounded-[30px] text-[#fff] text-[16px] px-[80px] py-[14px] tracking-[-0.03em] leading-[125%]"
              >
                Learn more
              </button>
              <button
                type="button"
                className=" bg-[#fff4df] p-[15px] rounded-[30px]"
              >
                <FaRegHeart className=" fill-[#F6B83D] w-[18px] h-[18px]" />
              </button>
            </div>
          </li>
        ),
      )}
      {open && (
        <ModalWindow onClose={toggleModal}>
          <>
            {!showInform ? (
              <ModalInformationAuth />
            ) : (
              <ModalInformationNotAuth />
            )}
          </>
        </ModalWindow>
      )}
    </>
  );
};
