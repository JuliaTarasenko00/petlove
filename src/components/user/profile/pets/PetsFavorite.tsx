import { INoticesFavorite } from '@/types/user';
import { favorite } from '../data';
import { Span, Text } from '@/components/ui/TextNotices';
import { MdOutlineStar } from 'react-icons/md';
import { format } from 'date-fns';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';
import { ModalWindow } from '@/components/ui/modal/Modal';
import { ModalInformationAuth } from '@/components/ui/modalInformation/Auth';
import { MarkupPets } from './MarkupPets';

export const PetsFavorite = () => {
  const { open, toggleModal } = useToggleModal();

  const handelClick = (id: string) => {
    toggleModal();
    console.log(id);
  };

  return (
    <>
      {favorite.length <= 0 && (
        <h3>
          Oops, <span>looks like there aren't any furies</span> on our adorable
          page yet. Do not worry! View your pets on the "find your favorite pet"
          page and add them to your favorites.
        </h3>
      )}
      {favorite.length > 0 && (
        <MarkupPets items={favorite} handelClick={handelClick} />
      )}
      {open && (
        <ModalWindow onClose={toggleModal}>
          <ModalInformationAuth />
        </ModalWindow>
      )}
    </>
  );
};
