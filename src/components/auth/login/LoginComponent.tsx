'use client';

import * as Yup from 'yup';
import Image from 'next/image';
import img from '/public/image/image_dog.png';
import icon from '/public/image/icon_dog.png';
import { TitlePage } from '../../ui/TitlePage';
import { PasswordInput } from '../../ui/authInput/PasswordInput';
import { EmailInput } from '../../ui/authInput/EmailInput';
import { Button } from '../../ui/authInput/Button';
import { FastRedirection } from '../../ui/authInput/FastRedirection';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';

type ValuesInput = Yup.InferType<typeof validationSchema>;

const initialValues: ValuesInput = {
  email: '',
  password: '',
};

export const LoginComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValuesInput>({
    defaultValues: initialValues,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((value) => {
    console.log('value: ', value);
  });

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

          <div className="mt-[32px] flex w-[100%] items-center justify-center">
            <form onSubmit={onSubmit} className="   w-[424px] ">
              <div className="mb-[58px] flex w-[100%] flex-col items-start gap-[16px]">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <EmailInput
                      {...field}
                      icon={true}
                      errorMessage={errors.email?.message}
                      placeholder="Email"
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <PasswordInput
                      {...field}
                      errorMessage={errors.password?.message}
                      placeholder="Password"
                    />
                  )}
                />
              </div>
              <Button>Log In</Button>
            </form>
          </div>
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
