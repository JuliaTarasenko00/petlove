'use client';
import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { MarkupPets } from './MarkupPets';
import { useState } from 'react';
import { useFetchNoticesId } from '@/helpers/api/useFetchNoticesId';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';

export const PetsFavorite = () => {
  const favorite = useAppSelector(
    (state) => state.user.userFullInformation.noticesFavorites,
  );
  const [id, setId] = useState<string>('');
  const { dataForModal, isLoading } = useFetchNoticesId(id);
  const { open, toggleModal } = useToggleModal();

  const handelClick = (id: string) => {
    setId(id);
    toggleModal();
  };

  return (
    <MarkupPets
      items={favorite}
      open={open}
      toggleModal={toggleModal}
      dataForModal={dataForModal}
      isLoadingModal={isLoading}
      handelClick={handelClick}
    />
  );
};
