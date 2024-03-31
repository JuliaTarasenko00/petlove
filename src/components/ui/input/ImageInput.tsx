'use client';
import { ForwardedRef, forwardRef } from 'react';

interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  placeholder: string;
}

export const ImageInput = forwardRef(
  (
    { value, placeholder, errorMessage, ...rest }: ImageInputProps,
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="w-[100%]">
        <div className=" relative ">
          <label htmlFor="image"> Upload photo</label>{' '}
          <input type="file" id="image" />
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

ImageInput.displayName = 'ImageInput';
