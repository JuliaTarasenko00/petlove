'use client';

import { useRouter } from 'next/navigation';
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
import { InputForImg } from '@/components/ui/input/InputForImg';
import { DataInput } from '@/components/ui/input/DataInput';
import { FormControl } from '@mui/material';
import { getSpecies } from '@/redux/filter/operation';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { CustomMenuItem, CustomSelect, style } from './SelectCustomStyle';

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
  const [selectImg, setSelectImg] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const { isLoading, species } = useAppSelector((state) => state.filter);
  const routBack = useRouter();

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
    console.log({ ...values, image: selectImg });
  });

  return (
    <section className="py-[32px]">
      <div className=" container flex flex-wrap justify-center gap-[32px] lg:flex-nowrap">
        <div className=" h-[inherit]">
          <Image
            src={image}
            alt="Dog"
            width={592}
            height={654}
            priority={true}
            className=" h-[280px] w-[335px] max-w-[100%] rounded-[60px] object-cover object-center sm:w-[704px] lg:h-[100%] lg:w-[592px]"
          />
        </div>
        <div className=" max-w-[335px] rounded-[60px] bg-[#fff] p-[20px] sm:w-[100%] sm:max-w-[704px] sm:px-[100px] sm:py-[40px] md:px-[140px] lg:px-[84px]  lg:py-[60px]">
          <h3 className="mb-[40px] text-[28px] font-bold tracking-[-0.03em] text-[#262626] md:text-[32px]">
            Add my pet /{' '}
            <span className=" text-[14px] text-[#26262680] md:text-[16px]">
              Personal details
            </span>
          </h3>
          <form
            onSubmit={handelSubmitForm}
            className=" m-auto w-[100%] sm:w-[335px] md:w-[432px] "
          >
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
              {errors.gender?.message && (
                <p className="mt-[4px] text-[12px] leading-[117%] tracking-[-0.03em] text-[#ef2447]">
                  {errors.gender.message}
                </p>
              )}
            </div>
            <div className="mb-[40px] mt-[20px] flex flex-col items-center justify-center gap-[18px] md:mt-[-20px]">
              <div className=" h-[86px] w-[86px] overflow-hidden rounded-[100px]">
                <img
                  src={!!selectImg ? URL.createObjectURL(selectImg) : img?.src}
                  alt="Pet photo"
                  loading="lazy"
                  className=" h-[100%] w-[100%]  object-cover object-center"
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
                <div className="w-[170px] md:w-[278px]">
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
              <div className=" flex justify-between gap-[12px] md:flex-wrap">
                <div className="w-[144px] sm:w-[160px] md:w-[210px]">
                  <Controller
                    name="birthday"
                    control={control}
                    render={({ field }) => (
                      <DataInput
                        {...field}
                        errorMessage={errors.birthday?.message}
                        activeBorder={!!field.value}
                      />
                    )}
                  />
                </div>
                <div className="w-[144px] sm:w-[160px] md:w-[210px] ">
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <FormControl sx={{ width: '100%', position: 'relative' }}>
                        {field.value.length <= 0 && (
                          <p className=" absolute left-[16px] top-[50%] z-30 translate-y-[-50%] text-[#26262680]">
                            Type of pet
                          </p>
                        )}
                        <CustomSelect
                          {...field}
                          MenuProps={{ PaperProps: { sx: style } }}
                          onOpen={() => dispatch(getSpecies())}
                          className={`${field.value.length > 0 ? 'border-[1px] border-[#f6b83d]' : 'border-[1px] border-[#26262626]'} ${!!errors.type?.message && 'border-[2px] border-[#ef2447]'}`}
                        >
                          {isLoading && <p>Loading...</p>}
                          {!isLoading &&
                            species.map((specie: string) => (
                              <CustomMenuItem key={specie} value={specie}>
                                {specie}
                              </CustomMenuItem>
                            ))}
                        </CustomSelect>
                      </FormControl>
                    )}
                  />
                  {errors.type?.message && (
                    <p className="mt-[4px] text-[12px] leading-[117%] tracking-[-0.03em] text-[#ef2447]">
                      {errors.type.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-end gap-[8px] md:justify-center">
              <button
                onClick={() => routBack.back()}
                type="button"
                className=" custom-transition block h-[48px] w-[100px] rounded-[30px]  bg-[#2626260d] text-[14px] font-bold leading-[125%] tracking-[-0.03em] text-[#262626] hover:bg-[#3535351f] focus:bg-[#3535351f] md:w-[170px] md:text-[16px]"
              >
                Back
              </button>
              <button
                type="submit"
                className=" button-active-darker h-[48px] w-[100px] rounded-[30px] bg-[#f6b83d] text-[14px] font-bold leading-[125%] tracking-[-0.03em] text-[#fff] md:w-[170px] md:text-[16px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
