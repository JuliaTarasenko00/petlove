'use client';
import { FormValue, SearchForm } from '@/components/ui/SearchForm';
import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { SelectList } from './Select';

export const Filter = () => {
  const { categories, isLoading, sex, species } = useAppSelector(
    (state) => state.filter,
  );

  const handleChange = (event: any) => {
    console.log('event.target.value: ', {
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (value: FormValue) => {
    console.log(value);
  };

  return (
    <div className="mt-[40px] flex items-center gap-[16px] rounded-[30px] bg-[#fff4df] p-[40px]">
      <SearchForm handelSubmitForm={submitForm} color={true} />
      <div className="flex items-center gap-[16px]">
        <SelectList
          isLoading={isLoading}
          categories={categories}
          species={species}
          sex={sex}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};
