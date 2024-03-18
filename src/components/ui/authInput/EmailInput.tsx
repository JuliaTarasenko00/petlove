'use client';
import { useField } from 'formik';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

export const EmailInput = ({ name, placeholder }: EmailInputProps) => {
  const [field, meta, helpers] = useField(name);
  const { setTouched } = helpers;

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    field.onChange(e);
    setTouched(true);
  };
  return (
    <div className="w-[100%]">
      <div className=" relative ">
        <input
          {...field}
          onChange={handleChange}
          placeholder={placeholder}
          type="email"
          className={`w-[100%] rounded-[30px] border-[1px] border-[#26262626] ${meta.touched && meta.error && 'outline-[#ef2447]'} ${!meta.error ? 'outline-[#08AA83]' : 'outline-none'}  p-[16px] text-[#262626] outline-offset-0`}
        />
        <button
          type="button"
          className=" absolute right-[20px] top-[50%] translate-y-[-50%]"
        >
          {meta.touched && meta.error ? (
            <IoClose className=" h-[22px] w-[22px] text-[#ef2447]" />
          ) : meta.touched && !meta.error ? (
            <FaCheck className=" h-[22px] w-[22px] text-[#08AA83]" />
          ) : null}
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

EmailInput.displayName = 'EmailInput';
