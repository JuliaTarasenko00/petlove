'use client';

import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { AuthLink } from '../ui/AuthLink';
import { user } from '../user/profile/data';
import img from '/public/image/not-photo.png';
import { signOut } from '@/redux/auth/operation';

interface IRender {
  mainPage?: boolean;
  auth: boolean;
}

export const RenderAuthComponent = ({ mainPage, auth }: IRender) => {
  const data = useAppSelector((state) => state.user.user);
  const image = !user?.avatar ? img.src : user?.avatar;
  const dispatch = useAppDispatch();

  return (
    <>
      {auth && (
        <div className=" flex items-center gap-[8px]">
          <button
            type="button"
            onClick={() => dispatch(signOut())}
            className={`button-active-darker w-[100%] rounded-[30px] bg-[#f6b83d] px-[35px] py-[15px]  text-[16px] font-bold uppercase leading-[125%] text-[#fff] sm:w-max ${mainPage ? 'hidden' : 'block'}`}
          >
            Log Out
          </button>
          <img
            src={image}
            alt={user.name}
            width="50"
            height="50"
            className="hidden rounded-[50px] lg:block"
          />
          <p
            className={`hidden text-[20px] font-bold lg:block ${mainPage ? 'text-[#fff]' : 'text-[#262626]'}`}
          >
            {data.name}
          </p>
        </div>
      )}
      {!auth && <AuthLink mainPage={mainPage} />}
    </>
  );
};
