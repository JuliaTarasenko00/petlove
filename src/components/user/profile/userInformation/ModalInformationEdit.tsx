'use client';

import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { user } from '../data';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';
import { TextInput } from '@/components/ui/input/TextInput';
import { fields } from '@hookform/resolvers/joi/src/__tests__/__fixtures__/data.js';
import { EmailInput } from '@/components/ui/authInput/EmailInput';
import { PhoneInput } from '@/components/ui/input/PhoneInput';
import { ImageInput } from '@/components/ui/input/ImageInput';

type ValuesInput = Yup.InferType<typeof validationSchema>;

const defaultValues: ValuesInput = {
  name: user?.name || '',
  email: user?.email || '',
  phone: user?.phone || '+380',
  image: user?.avatar || '',
};

export const ModalInformationEdit = () => {
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
      <form onSubmit={handleSubmitForm}>
        <div className=" mb-[40px] flex flex-col gap-[14px]">
          <div>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <ImageInput {...field} placeholder="Image" />
              )}
            />
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
          className=" button-active-darker w-[380px] max-w-[100%] rounded-[30px] bg-[#f6b83d] py-[16px] text-[16px] font-bold leading-[125%] tracking-[-0.03em] text-[#fff] outline-none"
        >
          Save
        </button>
      </form>
    </div>
  );
};
