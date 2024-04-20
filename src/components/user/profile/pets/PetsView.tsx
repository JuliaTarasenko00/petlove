import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { MarkupPets } from './MarkupPets';

export const PetsView = () => {
  const view = useAppSelector(
    (state) => state.user.userFullInformation.noticesViewed,
  );

  const handelClick = (id: string) => {
    console.log(id);
  };

  return (
    view.length > 0 && <MarkupPets items={view} handelClick={handelClick} />
  );
};
