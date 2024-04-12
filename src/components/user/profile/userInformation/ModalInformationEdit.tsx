'use client';

import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { user } from '../data';
import img from '/public/image/not-photo.png';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';
import { TextInput } from '@/components/ui/input/TextInput';
import { EmailInput } from '@/components/ui/authInput/EmailInput';
import { PhoneInput } from '@/components/ui/input/PhoneInput';
import { ImageInput } from '@/components/ui/input/ImageInput';
import { useState } from 'react';
import { InputForImg } from '@/components/ui/input/InputForImg';

type ValuesInput = Yup.InferType<typeof validationSchema>;

const defaultValues: ValuesInput = {
  name: user?.name || '',
  email: user?.email || '',
  phone: user?.phone || '+380',
  image: user?.avatar || '',
};

export const ModalInformationEdit = () => {
  const [selectImg, setSelectImg] = useState<File | null>(null);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValuesInput>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const handleSubmitForm = handleSubmit((values) => {
    console.log('values: ', values);
  });

  return (
    <div>
      <h3 className=" mb-[20px] text-[18px] font-bold leading-[133%] text-[#2b2b2a]">
        Edit information
      </h3>
      <form
        onSubmit={handleSubmitForm}
        className="max-w-[335px] sm:max-w-[380px]"
      >
        <div className=" mb-[40px] flex flex-col items-center gap-[14px]">
          <div className=" flex w-[100%] flex-col items-center gap-[12px]">
            <div className=" h-[86px] w-[86px] overflow-hidden rounded-[100px]">
              <img
                src={
                  !!selectImg
                    ? URL.createObjectURL(selectImg)
                    : user.avatar === ''
                      ? img?.src
                      : user?.avatar
                }
                alt={user.name}
                className="h-[100%] w-[100%] object-cover object-center"
              />
            </div>
            <div className=" flex w-[100%] flex-row-reverse items-center justify-between">
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <ImageInput
                    {...field}
                    setSelectImg={setSelectImg}
                    placeholder="Image"
                  />
                )}
              />
              <div className="w-[160px] md:w-[226px]">
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => (
                    <InputForImg
                      {...field}
                      placeholder="Enter URL"
                      errorMessage={errors.image?.message}
                      disabled={true}
                      activeBorder={!!selectImg}
                      value={
                        (selectImg &&
                          (URL.createObjectURL(selectImg).slice(
                            5,
                          ) as string)) ??
                        ''
                      }
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Full name"
                activeBorder={true}
                errorMessage={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <EmailInput
                {...field}
                placeholder="Email"
                activeBorder={true}
                icon={false}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                placeholder="Phone"
                activeBorder={true}
                errorMessage={errors.phone?.message}
              />
            )}
          />
        </div>
        <button
          type="submit"
          className=" button-active-darker w-[285px] max-w-[100%] rounded-[30px] bg-[#f6b83d] py-[16px] text-[16px] font-bold leading-[125%] tracking-[-0.03em] text-[#fff] outline-none md:w-[380px]"
        >
          Save
        </button>
      </form>
    </div>
  );
};
