'use client';
import { motion } from 'framer-motion';
import { NoticesResult } from '@/types/notices';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';
import { useCallback, useState } from 'react';
import { Span, Text } from '@/components/ui/TextNotices';
import { ModalWindow } from '@/components/ui/modal/Modal';
import { ModalInformationNotAuth } from '@/components/main/notices/modalInformation/NotAuth';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { useFetchNoticesId } from '@/helpers/api/useFetchNoticesId';
import { MarkupForModal } from '@/components/ui/markupForModal/MarkupForModal';
import { addFavoritePet } from '@/redux/auth/operation';
import { FaHeart } from 'react-icons/fa6';
import { FilterNotFound } from '@/components/ui/filterNotFound/FilterNotFound';

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface INoticesItem {
  items: NoticesResult[];
}

export const NoticesItem = ({ items }: INoticesItem) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.user.token);
  const favorite = useAppSelector((state) => state.user.favoritePets);
  const [showInform, setShowInform] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const { open, toggleModal } = useToggleModal();
  const { dataForModal, isLoading } = useFetchNoticesId(id);

  const clickLearnMore = useCallback(
    (id: string) => {
      toggleModal();
      if (auth) {
        setId(id);
        return setShowInform(false);
      } else {
        return setShowInform(true);
      }
    },
    [auth, toggleModal],
  );

  const clickFavorite = (id: string) => {
    if (auth) {
      dispatch(addFavoritePet(id));
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
        }: NoticesResult) => {
          return (
            <motion.li
              variants={item}
              key={_id}
              className=" flex w-[310px] flex-col gap-[50px] rounded-[16px] bg-[#fff] p-[24px] sm:w-[335px] md:w-[363px]"
            >
              <div className=" grow-[1]">
                <picture>
                  <source srcSet={imgURL} type="image/webp" />
                  <img
                    src={imgURL}
                    alt={title}
                    loading="lazy"
                    width="315"
                    height="178"
                    className=" mb-[24px] max-h-[178px] rounded-[16px] object-cover object-center"
                  />
                </picture>
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
                  disabled={!!favorite.find((id) => _id === id)}
                  onClick={() => clickFavorite(_id)}
                  className={` button-active-lighter rounded-[30px] bg-[#fff4df] p-[15px] outline-none disabled:cursor-not-allowed disabled:bg-[#fff4df]`}
                >
                  {favorite.find((id) => _id === id) ? (
                    <FaHeart className=" h-[18px] w-[18px] fill-[#F6B83D]" />
                  ) : (
                    <FaRegHeart className=" h-[18px] w-[18px] fill-[#F6B83D]" />
                  )}
                </button>
              </div>
            </motion.li>
          );
        },
      )}
      {!items.length && <FilterNotFound />}
      <ModalWindow onClose={toggleModal} open={open}>
        <>
          {!showInform ? (
            <MarkupForModal data={dataForModal} isLoading={isLoading} />
          ) : (
            <ModalInformationNotAuth />
          )}
        </>
      </ModalWindow>
    </>
  );
};
