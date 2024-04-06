'use client';
import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  placeholder: string;
  setSelectImg: (value: File | null) => void;
  value?: any;
}

export const ImageInput = forwardRef(
  (
    {
      value,
      setSelectImg,
      placeholder,
      errorMessage,
      onChange,
      ...rest
    }: ImageInputProps,
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div>
        <div className=" relative ">
          <label htmlFor="image" className=" h-[42px] max-w-[146px]">
            <span className=" button-active-lighter flex items-center gap-[5px] rounded-[30px] bg-[#fff4df] px-[12px] py-[12px] text-center text-[14px] font-medium text-[#262626]">
              Upload photo
              <span>
                <IoCloudUploadOutline className=" text-[#F6B83D]" />
              </span>
            </span>
          </label>
          <input
            {...rest}
            type="file"
            id="image"
            onChange={(ev: ChangeEvent<HTMLInputElement>) => {
              const files = ev.target.files;
              if (files && files.length > 0) {
                setSelectImg(files[0]);
                if (onChange) {
                  onChange(ev);
                }
              } else {
                setSelectImg(null);
              }
            }}
            accept="image/png, image/jpeg"
            multiple
            className="hidden"
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

ImageInput.displayName = 'ImageInput';
