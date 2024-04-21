'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { SelectList } from './Select';
import * as Yup from 'yup';
import { RadioButton } from './RadioButton';
import { getNoticesFilter } from '@/redux/notices/operation';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SearchInput } from '@/components/ui/input/SearchInput';
import { IoSearch } from 'react-icons/io5';
import { TState } from '../NoticesList';

interface FilterProps {
  setSelectedButton: any;
  setSelected: any;
  setSelectedName: (name: string) => void;
  selectedButton: TState;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Minimum number of characters is 3')
    .max(10, 'Too Long! Maximum number of characters is 10')
    .required(),
});

export const Filter: React.FC<FilterProps> = ({
  setSelectedButton,
  setSelected,
  setSelectedName,
  selectedButton,
}) => {
  const { categories, isLoading, species } = useAppSelector(
    (state) => state.filter,
  );

  const handleButtonChange = (bool: boolean, name: string, type: string) => {
    setSelectedButton((prev: TState) => {
      if (prev.name === name) {
        return { name: '', check: null, type };
      } else {
        return { name, check: bool, type };
      }
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<{ name: string }>({
    defaultValues: {
      name: '',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const submitForm = handleSubmit((value) => {
    setSelectedName(value.name);
  });

  return (
    <div className="mt-[40px] rounded-[30px] bg-[#fff4df] p-[20px] sm:p-[32px] lg:p-[40px]">
      <div className="flex flex-wrap items-center gap-[16px] border-b border-[#2626261a] pb-[20px]">
        <div className=" w-[100%] md:w-[265px]">
          <form className="relative" onSubmit={submitForm}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <SearchInput
                  {...field}
                  isColor={true}
                  handleClearSearch={() => {
                    reset();
                    setSelectedName('');
                  }}
                  errorMessage={errors.name?.message}
                  placeholder="Search"
                />
              )}
            />
            <button
              type="submit"
              disabled={!!errors.name}
              className="absolute right-[14px] top-[50%] translate-y-[-50%] disabled:cursor-no-drop"
            >
              <IoSearch className="duration-250 h-[18px] w-[18px] fill-[#262626] transition-colors ease-in-out hover:fill-[#f1b84d] focus:fill-[#f1b84d]" />
            </button>
          </form>
        </div>
        <SelectList
          isLoading={isLoading}
          categories={categories}
          species={species}
          handleChange={handleSelectChange}
        />
      </div>
      <RadioButton
        handleChange={handleButtonChange}
        selected={selectedButton}
      />
    </div>
  );
};
