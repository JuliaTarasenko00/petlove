'use client';
import { ForwardedRef, forwardRef } from 'react';
import { IoIosClose } from 'react-icons/io';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isColor?: boolean;
  handleClearSearch?: () => void;
}

export const SearchInput = forwardRef(
  (
    {
      value = '',
      errorMessage,
      handleClearSearch,
      isColor = false,
      ...rest
    }: SearchInputProps,
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <>
        <input
          {...rest}
          type="text"
          value={value}
          placeholder="Search"
          className={`w-full rounded-[30px] border-[1px] ${isColor ? 'bg-[#fff]' : 'bg-transparent'} ${isColor ? 'border-transparent' : 'border-[#26262626]'} p-[14px] ${isColor ? 'text-[#262626]' : 'text-[#26262680]'} ${errorMessage && 'border-[#ef4444]'} ${!!errorMessage ? 'outline-none' : 'outline-[#057405e0]'} ${isColor ? 'placeholder:text-[#262626]' : 'placeholder:text-[#26262680]'}`}
        />
        {errorMessage ? (
          <p className=" absolute bottom-[-34px] text-[12px] leading-[117%] tracking-[-0.03em] text-[#ef2447]">
            {errorMessage}
          </p>
        ) : null}
        {!!value && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-[34px] top-[50%] translate-y-[-50%]"
          >
            <IoIosClose className="duration-250 h-[35px] w-[35px] fill-[#262626] transition-colors  ease-in-out hover:fill-[#a52a2a] focus:fill-[#a52a2a]" />
          </button>
        )}
      </>
    );
  },
);

SearchInput.displayName = 'SearchInput';
