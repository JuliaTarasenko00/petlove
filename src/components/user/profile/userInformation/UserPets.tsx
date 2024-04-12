import { GoPlus } from 'react-icons/go';
import { pet } from '../data';
import { format } from 'date-fns';
import { RiDeleteBinLine } from 'react-icons/ri';
import Link from 'next/link';
import { routes } from '@/helpers/routes';

export const UserPets = () => {
  return (
    <>
      <div className=" mt-[20px] flex items-center justify-between">
        <h2 className="mb-[20px] text-[18px] font-bold leading-[133%] tracking-tight">
          UserPets
        </h2>
        <Link
          href={routes.user.addPet}
          className=" button-active-darker flex items-center gap-[3px] rounded-[30px] bg-[#f6b83d] px-[20px] py-[10px] text-[16px] font-medium leading-[133%] tracking-tight text-[#fff] outline-none "
        >
          Add pet <GoPlus />
        </Link>
      </div>
      <div className="mx-[auto] mt-[20px]  h-[360px] overflow-scroll sm:h-[200px] ">
        {pet.length > 0 && (
          <ul className=" m-auto flex w-[295px] max-w-[100%] flex-col items-center justify-center  gap-[10px] sm:w-[100%] sm:flex-row sm:flex-wrap md:gap-[14px]  lg:w-[440px] lg:flex-col">
            {pet.map((item) => {
              const data = new Date(item.birthday);
              const formatData = format(data, 'MM.dd.yyyy');
              return (
                <li
                  key={item?._id}
                  className=" flex w-[100%] items-start justify-between rounded-[20px] border-[1px] border-[#2626261a] p-[20px] sm:w-[305px] lg:w-[100%]"
                >
                  <img
                    src={item.imgURL}
                    alt={item.title}
                    width="90"
                    height="90"
                    className="mr-[25px] h-[66px] w-[66px] rounded-[100px] lg:h-[90px] lg:w-[90px]"
                  />
                  <div className=" m-auto">
                    <h2 className=" mb-[12px] text-[14px] font-bold leading-[129%] text-[#2b2b2a]">
                      {item.title}
                    </h2>
                    <ul className=" flex flex-wrap items-center gap-[10px] lg:flex-nowrap lg:gap-[25px]">
                      <li className=" flex flex-col items-center">
                        <p className=" text-[10px] font-medium leading-[140%] tracking-[-0.02em] text-[#26262680]">
                          Name
                        </p>
                        <p className=" text-[12px] font-medium leading-[117%] tracking-[-0.02em] text-[#262626]">
                          {item.name}
                        </p>
                      </li>
                      <li className=" flex flex-col items-center">
                        <p className=" text-[10px] font-medium leading-[140%] tracking-[-0.02em] text-[#26262680]">
                          Birthday
                        </p>
                        <p className=" text-[12px] font-medium leading-[117%] tracking-[-0.02em] text-[#262626]">
                          {formatData}
                        </p>
                      </li>
                      <li className=" flex flex-col items-center">
                        <p className=" text-[10px] font-medium leading-[140%] tracking-[-0.02em] text-[#26262680]">
                          Sex
                        </p>
                        <p className=" text-[12px] font-medium leading-[117%] tracking-[-0.02em] text-[#262626]">
                          {item.sex}
                        </p>
                      </li>
                      <li className=" flex flex-col items-center">
                        <p className=" text-[10px] font-medium leading-[140%] tracking-[-0.02em] text-[#26262680]">
                          Species
                        </p>
                        <p className=" text-[12px] font-medium leading-[117%] tracking-[-0.02em] text-[#262626]">
                          {item.species}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className=" button-active-lighter rounded-[30px] bg-[#fff4df] p-[10px] text-[#F6B83D] outline-none"
                  >
                    <RiDeleteBinLine />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
