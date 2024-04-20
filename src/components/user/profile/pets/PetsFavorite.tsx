import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { MarkupPets } from './MarkupPets';

export const PetsFavorite = () => {
  const favorite = useAppSelector(
    (state) => state.user.userFullInformation.noticesFavorites,
  );

  const handelClick = (id: string) => {
    console.log(id);
  };

  return <MarkupPets items={favorite} handelClick={handelClick} />;
};
