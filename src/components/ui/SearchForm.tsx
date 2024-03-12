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

type FormValue = {
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
        <form onSubmit={handleSubmit} className=" relative">
          <div>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Search"
              className={`w-[230px] p-[14px] rounded-[30px] border-[1px] text-[#26262680] ${errors.name ? 'border-[#ef4444]' : 'border-[#26262626]'} ${errors.name ? 'outline-none' : 'outline-[#057405e0]'}  placeholder:text-[#26262680]`}
            />
            {errors.name && (
              <p className=" absolute bottom-[-15px] translate-y-[15px] w-max text-[#ef4444]">
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
              className="absolute top-[50%] right-[34px] translate-y-[-50%]"
            >
              <IoIosClose className="w-[15px] h-[15px] fill-[#262626] hover:fill-[#a52a2a] focus:fill-[#a52a2a]  transition-colors duration-250 ease-in-out" />
            </button>
          )}
          <button
            type="submit"
            disabled={!!errors.name || values.name === ''}
            className=" absolute top-[50%] right-[14px] translate-y-[-50%] disabled:cursor-no-drop"
          >
            <IoSearch className="w-[18px] h-[18px] fill-[#262626] hover:fill-[#f1b84d] focus:fill-[#f1b84d]  transition-colors duration-250 ease-in-out" />
          </button>
        </form>
      )}
    </Formik>
  );
};
