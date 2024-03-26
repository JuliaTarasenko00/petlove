import { FaUserLarge } from 'react-icons/fa6';
import { LuPen } from 'react-icons/lu';
import { UserPets } from '../pets/UserPets';
import { user } from '../data';
import img from '/public/image/not-photo.png';
import { TextInput } from '@/components/ui/TextInput';
import { Formik } from 'formik';
import { useToggleModal } from '@/helpers/hooks/useToggleModal';
import { ModalWindow } from '@/components/ui/modal/Modal';
import { ModalInformation } from './ModalInformation';

interface ValuesInput {
  name: string;
  email: string;
  phone: string;
}

export const UserInformation = () => {
  const { open, toggleModal } = useToggleModal();
  const initialValues: ValuesInput = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone || '+380',
  };
  const image = !user?.avatar ? img.src : user?.avatar;

  return (
    <>
      <div className=" h-max w-[520px] rounded-[60px] bg-[#fff]  p-[40px]">
        <div>
          <div className=" flex items-start justify-between ">
            <p className=" flex max-w-[80px] items-center gap-[3px] rounded-[30px] bg-[#f6b83d] px-[14px] py-[10px] text-[14px] font-medium leading-[129%] tracking-tight text-[#fff]">
              User <FaUserLarge />
            </p>
            <img
              src={image}
              alt="User Avatar"
              width="110"
              height="110"
              className=" rounded-[100px]"
            />
            <button
              type="button"
              className=" button-active-lighter rounded-[30px] bg-[#fff4df] p-[10px] "
            >
              <LuPen className=" text-[#F6B83D]" />
            </button>
          </div>
          <h2 className="mb-[20px] text-[18px] font-bold leading-[133%] tracking-tight">
            My information
          </h2>
          <Formik initialValues={initialValues} onSubmit={() => {}}>
            {({ values }) => (
              <form className=" flex w-[100%] flex-col gap-[14px]">
                <TextInput
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  disabled={true}
                  icon={false}
                />
                <TextInput
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  disabled={true}
                  icon={false}
                />
                <TextInput
                  name="phone"
                  placeholder="Phone"
                  value={values.phone}
                  disabled={true}
                  icon={false}
                />
              </form>
            )}
          </Formik>
        </div>
        <UserPets />
        <button
          type="button"
          onClick={() => toggleModal()}
          className="button-active-lighter mt-[40px] rounded-[30px] bg-[#fff4df] px-[35px] py-[15px] text-[16px] font-bold uppercase leading-[125%] tracking-tight text-[#f6b83d]"
        >
          Log Out
        </button>
      </div>
      {open && (
        <ModalWindow onClose={toggleModal}>
          <ModalInformation onClose={toggleModal} />
        </ModalWindow>
      )}
    </>
  );
};
