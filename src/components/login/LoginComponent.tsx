'use client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import img from '/public/image/image_dog.png';
import icon from '/public/image/icon_dog.png';
import { TitlePage } from '../ui/TitlePage';
import { PasswordInput } from '../ui/authInput/PasswordInput';
import { EmailInput } from '../ui/authInput/EmailInput';
import { emailRegexp } from '@/helpers/emailRegexp';
import { Button } from '../ui/authInput/Button';
import { FastRedirection } from '../ui/authInput/FastRedirection';

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
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short! Minimum number of characters is 8')
    .required('Required'),
});

export const LoginComponent = () => {
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
            className=" min-h-[654px] w-[592px] rounded-[60px]"
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
        <div className=" rounded-[60px] bg-[#fff] px-[84px]  py-[69px]">
          <TitlePage>Log in</TitlePage>
          <p className=" mt-[16px] text-[18px] font-medium leading-[122%] tracking-[-0.02em] text-[#262626]">
            Welcome! Please enter your credentials to login to the platform:
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ values, handleSubmit }) => (
              <div className="mt-[32px] flex w-[100%] items-center justify-center">
                <form onSubmit={handleSubmit} className="   w-[424px] ">
                  <div className="mb-[58px] flex w-[100%] flex-col items-start gap-[16px]">
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
                  </div>
                  <Button>Log In</Button>
                </form>
              </div>
            )}
          </Formik>
          <FastRedirection
            name="Don’t have an account?"
            link="/register"
            nameLink="Register"
          />
        </div>
      </div>
    </section>
  );
};
