'use client';
import { FormValue, SearchForm } from '@/components/ui/SearchForm';
import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { SelectList } from './Select';
import { RadioButton } from './RadioButton';

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
    <div className="mt-[40px] rounded-[30px] bg-[#fff4df] p-[20px] sm:p-[32px] lg:p-[40px]">
      <div className="flex flex-wrap items-center gap-[16px] border-b border-[#2626261a] pb-[20px]">
        <div className=" w-[100%] sm:w-[265px]">
          <SearchForm handelSubmitForm={submitForm} color={true} />
        </div>
        <div className="flex flex-wrap items-center  justify-start  gap-[8px] sm:gap-[16px]">
          <SelectList
            isLoading={isLoading}
            categories={categories}
            species={species}
            sex={sex}
            handleChange={handleChange}
          />
        </div>
      </div>
      <RadioButton />
    </div>
  );
};
