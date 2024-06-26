'use client';
import { Controller, useForm } from 'react-hook-form';
import { InferType } from 'yup';
import { FaUserLarge } from 'react-icons/fa6';
import { LuPen } from 'react-icons/lu';
import { UserPets } from './UserPets';
import img from '/public/image/not-photo.png';
import { TextInput } from '@/components/ui/input/TextInput';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';
import { ModalWindow } from '@/components/ui/modal/Modal';
import { ModalInformationLogOut } from './ModalInformationLogOut';
import { ModalInformationEdit } from './ModalInformationEdit';
import { validationSchema } from './validationSchema';
import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { useEffect } from 'react';
import Image from 'next/image';

type ValuesInput = InferType<typeof validationSchema>;

const MODALNAME = {
  EDIT: 'edit',
  LOGOUT: 'logOut',
};

export const UserInformation = () => {
  const { modalWithName, openModalWithName, closeModalWithName } =
    useToggleModal();

  const user = useAppSelector((state) => state.user.userFullInformation);

  const initialValues: ValuesInput = {
    name: user.name,
    email: user.email,
    phone: user.phone || '+380',
  };
  const { control, reset } = useForm<ValuesInput>({
    defaultValues: initialValues,
    disabled: true,
  });

  useEffect(() => {
    if (user.email) {
      reset({
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [reset, user]);

  const image = !user.avatar ? img.src : user.avatar;

  return (
    <>
      <div className=" h-max w-[100%] rounded-[60px] bg-[#fff] p-[20px] sm:p-[30px] md:w-[704px]  lg:w-[520px]">
        <div>
          <div className=" flex items-start justify-between ">
            <p className=" flex max-w-[80px] items-center gap-[3px] rounded-[30px] bg-[#f6b83d] px-[14px] py-[10px] text-[14px] font-medium leading-[129%] tracking-tight text-[#fff]">
              User <FaUserLarge />
            </p>
            <Image
              src={image}
              alt="User Avatar"
              width={110}
              height={110}
              className=" h-[94px] w-[94px] rounded-[100px] object-cover object-center md:h-[110px] md:w-[110px]"
            />
            <button
              type="button"
              onClick={() => openModalWithName(MODALNAME.EDIT)}
              className=" button-active-lighter rounded-[30px] bg-[#fff4df] p-[10px] outline-none "
            >
              <LuPen className=" text-[#F6B83D]" />
            </button>
          </div>
          <h2 className="mb-[20px] text-[18px] font-bold leading-[133%] tracking-tight">
            My information
          </h2>
          <form className=" flex w-[100%] flex-col gap-[14px]">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextInput {...field} placeholder="Name" icon={false} />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextInput {...field} placeholder="Email" icon={false} />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextInput {...field} placeholder="Phone" icon={false} />
              )}
            />
          </form>
        </div>
        <UserPets />
        <button
          type="button"
          onClick={() => openModalWithName(MODALNAME.LOGOUT)}
          className=" button-active-lighter mt-[40px] rounded-[30px] bg-[#fff4df] px-[35px] py-[15px] text-[16px] font-bold uppercase leading-[125%] tracking-tight text-[#f6b83d] outline-none"
        >
          Log Out
        </button>
      </div>

      <ModalWindow
        onClose={closeModalWithName}
        open={modalWithName.name === MODALNAME.LOGOUT}
      >
        <ModalInformationLogOut onClose={closeModalWithName} />
      </ModalWindow>

      <ModalWindow
        onClose={closeModalWithName}
        open={modalWithName.name === MODALNAME.EDIT}
      >
        <ModalInformationEdit />
      </ModalWindow>
    </>
  );
};
