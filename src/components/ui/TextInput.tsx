'use client';
import { ForwardedRef, forwardRef } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
  errorMessage?: string;
  placeholder: string;
  disabled?: boolean;
}

export const TextInput = forwardRef(
  (
    {
      value,
      icon,
      placeholder,
      errorMessage,
      disabled,
      ...rest
    }: TextInputProps,
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const valueLength = typeof value === 'string' ? value?.length : 0;

    return (
      <div className="w-[100%]">
        <div className=" relative ">
          <input
            {...rest}
            type="text"
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-[100%] rounded-[30px] ${disabled && 'cursor-no-drop'} border-[1px] border-[#26262626] bg-transparent ${errorMessage && 'outline-[#ef2447]'} ${!errorMessage ? 'outline-[#08AA83]' : 'outline-none'}  p-[16px] text-[#262626] outline-offset-0`}
          />
          {icon && (
            <button
              type="button"
              className=" absolute right-[20px] top-[50%] translate-y-[-50%]"
            >
              {errorMessage ? (
                <IoClose className=" h-[22px] w-[22px] text-[#ef2447]" />
              ) : !errorMessage && valueLength > 0 ? (
                <FaCheck className=" h-[22px] w-[22px] text-[#08AA83]" />
              ) : null}
            </button>
          )}
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

TextInput.displayName = 'TextInput';
