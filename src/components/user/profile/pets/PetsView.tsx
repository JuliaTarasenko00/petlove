import { INoticesViewed } from '@/types/user';
import { view } from '../data';
import { MarkupPets } from './MarkupPets';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';
import { ModalWindow } from '@/components/ui/modal/Modal';
import { ModalInformationAuth } from '@/components/ui/modalInformation/Auth';

export const PetsView = () => {
  const { open, toggleModal } = useToggleModal();

  const handelClick = (id: string) => {
    toggleModal();
    console.log(id);
  };

  return (
    <>
      {view.length <= 0 && (
        <h3>
          Oops, <span>looks like there aren't any furies</span> on our adorable
          page yet. Do not worry! View your pets on the "find your favorite pet"
          page and add them to your favorites.
        </h3>
      )}
      {view.length > 0 && <MarkupPets items={view} handelClick={handelClick} />}
      {open && (
        <ModalWindow onClose={toggleModal}>
          <ModalInformationAuth />
        </ModalWindow>
      )}
    </>
  );
};
