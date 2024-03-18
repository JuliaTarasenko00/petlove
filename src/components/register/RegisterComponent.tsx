'use client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import img from '/public/image/image_cat.png';
import icon from '/public/image/icon_cat.webp';
import { TitlePage } from '../ui/TitlePage';
import { PasswordInput } from '../ui/authInput/PasswordInput';
import { EmailInput } from '../ui/authInput/EmailInput';
import { emailRegexp } from '@/helpers/emailRegexp';
import { TextInput } from '../ui/TextInput';

interface ValuesInput {
  name: string;
  email: string;
  password: string;
  configPassword: string;
}

const initialValues: ValuesInput = {
  name: '',
  email: '',
  password: '',
  configPassword: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short! Minimum number of characters is 5')
    .max(20, 'Too Long! Maximum number of characters is 20')
    .required('Required'),
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short! Minimum number of characters is 8')
    .required('Required'),
  configPassword: Yup.string()
    .min(8, 'Too Short! Minimum number of characters is 8')
    .required('Required'),
});

export const RegisterComponent = () => {
  return (
    <section className="py-[32px]">
      <div className=" container flex justify-center gap-[32px]">
        <div className=" relative ">
          <Image
            src={img}
            priority={true}
            width={592}
            height={654}
            alt="Image Dog"
            className=" h-[654px] w-[592px] rounded-[60px]"
          />
          <div className="absolute bottom-[15%] left-[61px] flex translate-y-[-15%] items-start gap-[8px] rounded-[20px] bg-[#fff] p-[16px]">
            <Image
              src={icon}
              priority={true}
              width={60}
              height={60}
              alt="Image Dog"
              className="  h-[60px] w-[60px]"
            />
            <div>
              <div className=" mb-[8px] flex justify-between">
                <h3 className=" text-[16px] font-bold leading-[125%] tracking-[-0.03em] text-[#f6b83d]">
                  Jack
                </h3>
                <p className=" text-[12px] font-medium leading-[117%] tracking-[-0.02em] text-[#262626]">
                  <span className=" text-[#26262680]">Birthday:</span>{' '}
                  10.11.2022
                </p>
              </div>
              <p className="max-w-[194px] text-[12px] font-medium leading-[117%] tracking-[-0.02em] text-[#262626cc]">
                Jack is a gray Persian cat with green eyes. He loves to be
                pampered and groomed, and enjoys playing with toys.
              </p>
            </div>
          </div>
        </div>
        <div className=" mb-[32px] rounded-[60px] bg-[#fff] px-[84px]  py-[69px]">
          <TitlePage>Register</TitlePage>
          <p className=" mt-[16px] text-[18px] font-medium leading-[122%] tracking-[-0.02em] text-[#262626]">
            Thank you for your interest in our platform.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ values, handleSubmit }) => (
              <div className="flex w-[100%] items-center justify-center">
                <form
                  onSubmit={handleSubmit}
                  className=" mt-[32px] flex w-[424px] flex-col items-start gap-[16px]"
                >
                  <TextInput
                    name="name"
                    icon={true}
                    placeholder="User Name"
                    value={values.name}
                  />
                  <EmailInput
                    name="email"
                    placeholder="Email"
                    value={values.email}
                  />
                  <PasswordInput
                    name="password"
                    placeholder="Password"
                    value={values.password}
                  />
                  <PasswordInput
                    name="configPassword"
                    placeholder="Config Password"
                    value={values.configPassword}
                  />
                  <button
                    type="submit"
                    className=" w-[100%] rounded-[30px] bg-[#f6b83d] py-[16px] text-center"
                  >
                    Register
                  </button>
                </form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};
