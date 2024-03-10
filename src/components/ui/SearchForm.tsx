import { Formik } from 'formik';
import { CiSearch } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import * as Yup from 'yup';

interface FormValue {
  name: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Minimum number of characters is 3')
    .max(10, 'Too Long! Maximum number of characters is 10')
    .required('Required'),
});

export const SearchForm = () => {
  const initialValues: FormValue = { name: '' };

  const handelSubmitForm = (values: FormValue) => {
    console.log(values);
  };

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
              onClick={() => resetForm()}
              className="absolute top-[50%] right-[34px] translate-y-[-50%]"
            >
              <IoIosClose />
            </button>
          )}
          <button
            type="submit"
            className=" absolute top-[50%] right-[14px] translate-y-[-50%] "
          >
            <CiSearch />
          </button>
        </form>
      )}
    </Formik>
  );
};
