'use client';
import * as Yup from 'yup';
import Image from 'next/image';
import img from '/public/image/image_cat.png';
import icon from '/public/image/icon_cat.webp';
import { TitlePage } from '../../ui/TitlePage';
import { PasswordInput } from '../../ui/authInput/PasswordInput';
import { EmailInput } from '../../ui/authInput/EmailInput';
import { TextInput } from '../../ui/input/TextInput';
import { Button } from '../../ui/authInput/Button';
import { FastRedirection } from '../../ui/authInput/FastRedirection';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';
import { routes } from '@/helpers/routes';
import { useEffect } from 'react';
import { useAppDispatch } from '@/helpers/hooks/useActionHooks';
import { signUp } from '@/redux/auth/operation';
import { useRouter } from 'next/navigation';

type ValuesInput = Yup.InferType<typeof validationSchema>;

const initialValues: ValuesInput = {
  name: '',
  email: '',
  password: '',
  configPassword: '',
};

export const RegisterComponent = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
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
    dispatch(
      signUp({
        email: value.email,
        password: value.password,
        name: value.name,
      }),
    );

    router.replace(routes.user.profile);
  });

  return (
    <section className="py-[32px]">
      <div className=" container flex flex-wrap items-center justify-center gap-[32px] lg:flex-nowrap">
        <div className=" relative">
          <Image
            src={img}
            priority={true}
            width={592}
            height={654}
            alt="Image Dog"
            className=" h-[280px] w-[335px] max-w-[100%] rounded-[60px] object-cover object-top sm:w-[704px] lg:min-h-[654px] lg:w-[592px]"
          />
          <div className=" absolute bottom-[15%] left-[61px] hidden translate-y-[-15%] items-start gap-[8px] rounded-[20px] bg-[#fff] p-[16px] md:flex">
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
        <div
          data-aos="flip-down"
          className=" max-w-[335px] rounded-[60px] bg-[#fff] px-[20px]  py-[20px] sm:w-[100%] sm:max-w-[704px] sm:px-[100px] sm:py-[30px] md:px-[140px] lg:px-[84px]  lg:py-[69px]"
        >
          <TitlePage>Register</TitlePage>
          <p className=" mt-[16px] text-[18px] font-medium leading-[122%] tracking-[-0.02em] text-[#262626]">
            Thank you for your interest in our platform.
          </p>
          <div className="mt-[32px] flex w-[100%] items-center justify-center">
            <form
              onSubmit={onSubmit}
              className="  w-[100%]  md:w-[100%]  md:max-w-[424px] "
            >
              <div className="mb-[34px]  flex w-[100%] flex-col items-start gap-[16px] ">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      errorMessage={errors.name?.message}
                      icon={true}
                      placeholder="User Name"
                    />
                  )}
                />
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
                <Controller
                  name="configPassword"
                  control={control}
                  render={({ field }) => (
                    <PasswordInput
                      {...field}
                      errorMessage={errors.configPassword?.message}
                      placeholder="Password Password"
                    />
                  )}
                />
              </div>
              <Button>Register</Button>
            </form>
          </div>
          <FastRedirection
            name="Already have an account?"
            link={routes.main.login}
            nameLink="Login"
          />
        </div>
      </div>
    </section>
  );
};
