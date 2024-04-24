'use client';
import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { MarkupPets } from './MarkupPets';
import { useState } from 'react';
import { useFetchNoticesId } from '@/helpers/api/useFetchNoticesId';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';

export const PetsView = () => {
  const view = useAppSelector(
    (state) => state.user.userFullInformation.noticesViewed,
  );
  const [id, setId] = useState<string>('');
  const { dataForModal, isLoading } = useFetchNoticesId(id);
  const { open, toggleModal } = useToggleModal();

  const handelClick = (id: string) => {
    setId(id);
    toggleModal();
  };
  return (
    view.length > 0 && (
      <MarkupPets
        items={view}
        open={open}
        toggleModal={toggleModal}
        dataForModal={dataForModal}
        isLoadingModal={isLoading}
        handelClick={handelClick}
      />
    )
  );
};
