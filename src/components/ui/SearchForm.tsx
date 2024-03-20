'use client';
import { Formik } from 'formik';
import { IoSearch } from 'react-icons/io5';
import { IoIosClose } from 'react-icons/io';
import * as Yup from 'yup';

interface FormProps {
  handelSubmitForm: (values: FormValue) => void;
  setValue?: (v: string) => void;
  setPage?: (v: number) => void;
}

export type FormValue = {
  name: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Minimum number of characters is 3')
    .max(10, 'Too Long! Maximum number of characters is 10'),
});

export const SearchForm = ({
  handelSubmitForm,
  setValue,
  setPage,
}: FormProps) => {
  const initialValues: FormValue = { name: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handelSubmitForm}
    >
      {({ values, errors, handleChange, handleSubmit, resetForm }) => (
        <form onSubmit={handleSubmit} className=" relative w-[230px]">
          <div>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Search"
              className={`w-[100%] rounded-[30px] border-[1px] p-[14px] text-[#26262680] ${errors.name ? 'border-[#ef4444]' : 'border-[#26262626]'} ${errors.name ? 'outline-none' : 'outline-[#057405e0]'}  placeholder:text-[#26262680]`}
            />
            {errors.name && (
              <p className=" absolute bottom-[-15px] w-max translate-y-[15px] text-[#ef4444]">
                {errors.name}
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
                resetForm();
              }}
              className="absolute right-[34px] top-[50%] translate-y-[-50%]"
            >
              <IoIosClose className="duration-250 h-[15px] w-[15px] fill-[#262626] transition-colors  ease-in-out hover:fill-[#a52a2a] focus:fill-[#a52a2a]" />
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
      )}
    </Formik>
  );
};
