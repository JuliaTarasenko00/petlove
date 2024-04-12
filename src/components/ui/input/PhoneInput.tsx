'use client';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { IMaskMixin } from 'react-imask';

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  placeholder: string;
  disabled?: boolean;
  activeBorder?: boolean;
}

interface MaskedStyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: ForwardedRef<HTMLInputElement>;
}

const MaskedInput = IMaskMixin(
  ({ inputRef, ...props }: MaskedStyledInputProps) => (
    <input ref={inputRef} {...props} />
  ),
);

export const PhoneInput = forwardRef(
  (
    {
      value,
      placeholder,
      errorMessage,
      disabled,
      activeBorder,
      ...rest
    }: PhoneInputProps,
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="w-[100%]">
        <div className=" relative ">
          <MaskedInput
            mask="+38# *0 000 00 00"
            definitions={{
              '#': /[0]/,
              '*': /[6,7,8,9,5]/,
            }}
            radix="."
            inputRef={_ref}
            overwrite
            {...rest}
            type="phone"
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-[100%] rounded-[30px] p-[12px] sm:p-[16px] ${disabled && 'cursor-no-drop'} border-[1px]  ${activeBorder ? 'border-[#f6b83d]' : 'border-[#26262626]'} bg-transparent ${errorMessage && 'outline-[#ef2447]'} ${!errorMessage ? 'outline-[#08AA83]' : 'outline-none'} text-[#262626] outline-offset-0`}
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

PhoneInput.displayName = 'PhoneInput';
