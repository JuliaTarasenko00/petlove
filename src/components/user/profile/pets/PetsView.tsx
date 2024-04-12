import { view } from '../data';
import { MarkupPets } from './MarkupPets';

export const PetsView = () => {
  const handelClick = (id: string) => {
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
    </>
  );
};
