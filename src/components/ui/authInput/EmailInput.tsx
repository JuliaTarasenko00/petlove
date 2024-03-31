'use client';
import { ForwardedRef, forwardRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  activeBorder?: boolean;
  icon?: boolean;
  placeholder: string;
}

export const EmailInput = forwardRef(
  (
    {
      value,
      placeholder,
      errorMessage,
      activeBorder,
      icon,
      ...rest
    }: EmailInputProps,
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const valueLength = typeof value === 'string' ? value?.length : 0;

    return (
      <div className="w-[100%]">
        <div className=" relative ">
          <input
            {...rest}
            ref={_ref}
            placeholder={placeholder}
            value={value}
            type="email"
            className={`w-[100%] rounded-[30px] border-[1px] ${activeBorder ? 'border-[#f6b83d]' : 'border-[#26262626]'}  ${errorMessage && 'outline-[#ef2447]'} ${!errorMessage ? 'outline-[#08AA83]' : 'outline-none'}  p-[16px] text-[#262626] outline-offset-0`}
          />
          <p className=" absolute right-[20px] top-[50%] translate-y-[-50%] outline-none">
            {errorMessage && icon ? (
              <IoClose className=" h-[22px] w-[22px] text-[#ef2447] outline-none" />
            ) : !errorMessage && valueLength > 0 && icon ? (
              <FaCheck className=" h-[22px] w-[22px] text-[#08AA83] outline-none" />
            ) : null}
          </p>
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

EmailInput.displayName = 'EmailInput';
