'use client';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import img from '/public/image/icon_cat.webp';
import { MarkupPets } from './MarkupPets';
import { useState } from 'react';
import { useFetchNoticesId } from '@/helpers/api/useFetchNoticesId';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';
import { LoaderForPage } from '@/components/ui/loader/LoaderForPage';
import { ModalWindow } from '@/components/ui/modal/Modal';
import { MarkupForModal } from '@/components/ui/markupForModal/MarkupForModal';
import { deleteFavoritePet } from '@/redux/auth/operation';
import Image from 'next/image';

const NameModal = {
  MORE: 'more',
  REMOVE: 'remove',
};

export const PetsFavorite = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const favorite = useAppSelector(
    (state) => state.user.userFullInformation.noticesFavorites,
  );
  const [id, setId] = useState<string>('');
  const { dataForModal, isLoading: isLoadingModal } = useFetchNoticesId(id);
  const { modalWithName, openModalWithName, closeModalWithName } =
    useToggleModal();

  const handelClick = (id: string) => {
    setId(id);
    openModalWithName(NameModal.MORE);
  };

  const handelOpenModalFavorite = (id: string) => {
    openModalWithName(NameModal.REMOVE);
    setId(id);
  };

  const handelDeleteFavorite = () => {
    dispatch(deleteFavoritePet(id));
    closeModalWithName();
  };

  return (
    <>
      {isLoading && (
        <div className=" flex h-[50vh] w-[100%] items-center justify-center">
          <LoaderForPage />
        </div>
      )}
      {!isLoading && (
        <MarkupPets
          items={favorite}
          onOpenModalFavorite={handelOpenModalFavorite}
          handelClick={handelClick}
          isFavorite={true}
        />
      )}
      <ModalWindow open={modalWithName.open} onClose={closeModalWithName}>
        {modalWithName.name === NameModal.MORE ? (
          <MarkupForModal
            isProfilePage={true}
            data={dataForModal}
            isLoading={isLoadingModal}
          />
        ) : (
          <div className=" text-center">
            <Image
              src={img}
              alt="Image cat"
              priority={true}
              width={80}
              height={80}
              className="m-auto"
            />
            <h3 className=" mx-auto mt-[20px] w-[200px] text-center text-[16px] font-medium leading-[117%] tracking-[-0.03em] text-[#262626]">
              Are you sure you want to remove from your favorites?
            </h3>
            <div className="mt-[28px]">
              <button
                type="button"
                onClick={handelDeleteFavorite}
                className=" button-active-darker mr-[8px] rounded-[30px] bg-[#f6b83d] px-[40px] py-[14px]  text-[16px] font-bold  leading-[125%] tracking-[-0.03em] text-[#fff]  sm:px-[57px]"
              >
                Yes
              </button>

              <button
                type="button"
                onClick={closeModalWithName}
                className="rounded-[30px] bg-[#2626260d] px-[40px] py-[14px] text-[16px]  font-bold leading-[125%]  tracking-[-0.03em] text-[#262626] sm:px-[57px]"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </ModalWindow>
    </>
  );
};
