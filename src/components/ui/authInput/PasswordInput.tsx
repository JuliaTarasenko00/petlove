'use client';
import { useField } from 'formik';
import { useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

export const PasswordInput = ({ name, placeholder }: PasswordInputProps) => {
  const [field, meta, helpers] = useField(name);
  const { setTouched } = helpers;
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    field.onChange(e);
    setTouched(true);
  };

  return (
    <div className="w-[100%]">
      <div className=" relative ">
        <input
          {...field}
          placeholder={placeholder}
          type={show ? 'text' : 'password'}
          autoComplete="new-password"
          onChange={handleChange}
          className={`w-[100%] rounded-[30px] border-[1px] border-[#26262626] ${meta.touched && meta.error && 'outline-[#ef2447]'} ${!meta.error ? 'outline-[#08AA83]' : 'outline-none'}  p-[16px] text-[#262626] outline-offset-0`}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className=" absolute right-[20px] top-[50%] translate-y-[-50%]"
        >
          {show ? (
            <FiEye className=" h-[22px] w-[22px] text-[#F6B83D]" />
          ) : (
            <FiEyeOff className=" h-[22px] w-[22px] text-[#F6B83D]" />
          )}
        </button>
      </div>
      {meta.touched && meta.error ? (
        <p className="mt-[4px] text-[12px] leading-[117%] tracking-[-0.03em] text-[#ef2447]">
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};

PasswordInput.displayName = 'PasswordInput';
