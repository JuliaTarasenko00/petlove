'use client';
import { format } from 'date-fns';
import { ForwardedRef, forwardRef, useState } from 'react';

interface DataInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  activeBorder?: boolean;
}

export const DataInput = forwardRef(
  (
    { value, errorMessage, activeBorder, ...rest }: DataInputProps,
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const data = format(new Date(), 'yyyy-MM-dd');

    return (
      <div className="w-[100%] ">
        <div className=" relative ">
          <input
            {...rest}
            type="date"
            id="date"
            min="2000-01-01"
            max={data}
            value={value}
            className={`w-[100%] ${!!value ? ' text-[#262626]' : 'text-[#26262680]'} rounded-[30px] border-[1px] outline-none   ${activeBorder ? 'border-[#f6b83d]' : 'border-[#26262626]'} bg-transparent ${errorMessage && 'border-[2px] border-[#ef2447]'} 'outline-none' p-[16px]  outline-offset-0`}
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

DataInput.displayName = 'DataInput';
