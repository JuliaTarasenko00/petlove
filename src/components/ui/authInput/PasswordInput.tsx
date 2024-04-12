'use client';
import { ForwardedRef, forwardRef, useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  placeholder: string;
}

export const PasswordInput = forwardRef(
  (
    { value, placeholder, errorMessage, ...rest }: PasswordInputProps,
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [show, setShow] = useState<boolean>(false);

    return (
      <div className="w-[100%]">
        <div className=" relative ">
          <input
            {...rest}
            ref={_ref}
            placeholder={placeholder}
            type={show ? 'text' : 'password'}
            autoComplete="new-password"
            className={`w-[100%] rounded-[30px] border-[1px] border-[#26262626] p-[12px] sm:p-[16px] ${errorMessage && 'outline-[#ef2447]'} ${!errorMessage ? 'outline-[#08AA83]' : 'outline-none'} text-[#262626] outline-offset-0`}
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className=" absolute right-[20px] top-[50%] translate-y-[-50%]"
          >
            {show ? (
              <FiEye className=" h-[22px] w-[22px] text-[#F6B83D] " />
            ) : (
              <FiEyeOff className=" h-[22px] w-[22px] text-[#F6B83D] " />
            )}
          </button>
        </div>
        {errorMessage ? (
          <p className="mt-[4px] text-[12px] leading-[117%] tracking-[-0.03em] text-[#ef2447]">
            {errorMessage}
          </p>
        ) : null}
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
