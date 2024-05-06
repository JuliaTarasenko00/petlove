'use client';
import { ForwardedRef, forwardRef } from 'react';

interface InputForImgProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  placeholder: string;
  disabled?: boolean;
  activeBorder?: boolean;
}

export const InputForImg = forwardRef(
  (
    {
      value,
      placeholder,
      errorMessage,
      disabled,
      activeBorder,
      ...rest
    }: InputForImgProps,
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="w-[100%] ">
        <div className=" relative ">
          <input
            {...rest}
            type="text"
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-[100%] rounded-[30px] outline-none ${disabled && 'cursor-no-drop'} border-[1px]  ${activeBorder || value ? 'border-[#f6b83d]' : 'border-[#26262626]'} bg-transparent ${errorMessage && 'border-[2px] border-[#ef2447]'} 'outline-none' p-[5px] text-[#262626] outline-offset-0 sm:p-[10px]`}
          />
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

InputForImg.displayName = 'InputForImg';
