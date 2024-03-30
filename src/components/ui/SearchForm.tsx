'use client';
import { IoSearch } from 'react-icons/io5';
import { IoIosClose } from 'react-icons/io';
import * as Yup from 'yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormProps {
  handelSubmitForm: SubmitHandler<FormValue>;
  setValue?: (v: string) => void;
  setPage?: (v: number) => void;
  color?: boolean;
}

export type FormValue = {
  name: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Minimum number of characters is 3')
    .max(10, 'Too Long! Maximum number of characters is 10')
    .required(),
});

export const SearchForm = ({
  handelSubmitForm,
  setValue,
  setPage,
  color,
}: FormProps) => {
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      name: '',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const values = getValues();

  return (
    <form
      onSubmit={handleSubmit(handelSubmitForm)}
      className=" relative w-[230px]"
    >
      <div>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Search"
              className={`w-full rounded-[30px] border-[1px] ${color ? 'bg-[#fff]' : 'bg-transparent'} ${color && 'border-transparent'} p-[14px] ${color ? 'text-[#262626]' : 'text-[#26262680]'} ${errors.name ? 'border-[#ef4444]' : 'border-[#26262626]'} ${errors.name ? 'outline-none' : 'outline-[#057405e0]'} ${color ? 'placeholder:text-[#262626]' : 'placeholder:text-[#26262680]'}`}
            />
          )}
        />
        {errors.name && (
          <p className=" absolute bottom-[-15px] w-max translate-y-[15px] text-[#ef4444]">
            {errors.name.message}
          </p>
        )}
      </div>
      {values.name.length >= 1 && (
        <button
          type="button"
          onClick={() => {
            if (setPage && setValue) {
              setPage(1);
              setValue('');
            }
          }}
          className="absolute right-[34px] top-[50%] translate-y-[-50%]"
        >
          <IoIosClose className="duration-250 h-[35px] w-[35px] fill-[#262626] transition-colors  ease-in-out hover:fill-[#a52a2a] focus:fill-[#a52a2a]" />
        </button>
      )}
      <button
        type="submit"
        disabled={!!errors.name || values.name === ''}
        className=" absolute right-[14px] top-[50%] translate-y-[-50%] disabled:cursor-no-drop"
      >
        <IoSearch className="duration-250 h-[18px] w-[18px] fill-[#262626] transition-colors  ease-in-out hover:fill-[#f1b84d] focus:fill-[#f1b84d]" />
      </button>
    </form>
  );
};
