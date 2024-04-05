'use client';

import Image from 'next/image';
import image from '/public/image/image_dog_add_pets.webp';
import { InferType } from 'yup';
import { IoFemaleSharp, IoMale, IoMaleFemale } from 'react-icons/io5';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import img from '/public/image/image-pet-add.png';
import { validationSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInput } from '@/components/ui/input/TextInput';
import { ImageInput } from '@/components/ui/input/ImageInput';

interface IListSelect {
  name: string;
  element: React.ReactNode;
  style: string;
}

export const type = {
  female: 'female',
  male: 'male',
  multiple: 'multiple',
};

type TDefaultValues = InferType<typeof validationSchema>;

const defaultValues: TDefaultValues = {
  petsName: '',
  title: '',
  birthday: '',
  type: '',
  gender: '',
  image: '',
};

export const AddPetForm = () => {
  const [checkedName, setCheckedName] = useState<string>('');
  const [selectImg, setSelectImg] = useState<any>(null);
  const listSelect: IListSelect[] = [
    {
      name: type.female,
      element: <IoFemaleSharp />,
      style: ` overflow-hidden w-[40px] h-[40px] rounded-[30px] hover:text-[#fff] focus:text-[#fff] flex items-center justify-center custom-transition hover:bg-[#f43f5e] focus:bg-[#f43f5e] ${checkedName === type.female ? 'text-[#fff] bg-[#f43f5e]' : 'text-[#F43F5E] bg-[#f43f5e1a]'} `,
    },
    {
      name: type.male,
      element: <IoMale />,
      style: ` overflow-hidden w-[40px] h-[40px] hover:text-[#fff] focus:text-[#fff] rounded-[30px] flex items-center custom-transition justify-center hover:bg-[#54adff] focus:bg-[#54adff] ${checkedName === type.male ? 'text-[#fff] bg-[#54adff]' : ' text-[#54ADFF] bg-[#54adff1a]'}`,
    },
    {
      name: type.multiple,
      element: <IoMaleFemale />,
      style: ` overflow-hidden w-[40px] h-[40px] rounded-[30px]  hover:text-[#fff] focus:text-[#fff] flex items-center custom-transition justify-center hover:bg-[#f6b83d] focus:bg-[#f6b83d] ${checkedName === type.multiple ? 'text-[#fff] bg-[#f6b83d]' : 'text-[#F6B83D] bg-[#fff4df]'}`,
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const handelSubmitForm = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <section className="py-[32px]">
      <div className=" container flex items-center justify-center gap-[32px]">
        <div>
          <Image
            src={image}
            alt="Dog"
            width={592}
            height={654}
            priority={true}
            className=" h-[654px] w-[592px] rounded-[60px]"
          />
        </div>
        <div className=" w-[592px] rounded-[60px] bg-[#fff] px-[80px] py-[60px]">
          <h3 className="mb-[40px]">
            Add my pet / <span>Personal details</span>
          </h3>
          <form onSubmit={handelSubmitForm} className="  w-[432px] ">
            <div>
              <ul className=" flex items-center gap-[8px]">
                {listSelect.map(({ element, name, style }) => (
                  <li key={name} className={style}>
                    <Controller
                      control={control}
                      name="gender"
                      render={({ field }) => (
                        <label
                          htmlFor={name}
                          className=" cursor-pointer p-[10px]"
                        >
                          <input
                            {...field}
                            type="radio"
                            id={name}
                            value={name}
                            className="hidden"
                            checked={checkedName === name}
                            onChange={(e) => {
                              field.onChange(e.target.value),
                                setCheckedName(name);
                            }}
                          />
                          {element}
                        </label>
                      )}
                    />
                  </li>
                ))}
              </ul>
              {errors.gender?.message && <p>{errors.gender.message}</p>}
            </div>
            <div className="mb-[40px] flex flex-col items-center justify-center gap-[18px]">
              <div>
                <img
                  src={!!selectImg ? URL.createObjectURL(selectImg) : img?.src}
                  alt="Pet photo"
                  loading="lazy"
                  width="86"
                  height="86"
                  className="object-cover object-center"
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
              </div>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    placeholder="Title"
                    errorMessage={errors.title?.message}
                    activeBorder={
                      field.value.length > 0 && !errors.title?.message
                    }
                  />
                )}
              />
              <Controller
                name="petsName"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    placeholder="Pet`s Name"
                    errorMessage={errors.petsName?.message}
                    activeBorder={
                      field.value.length > 0 && !errors.petsName?.message
                    }
                  />
                )}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
