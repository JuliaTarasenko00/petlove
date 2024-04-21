'use client';

import { FC } from 'react';

interface RadioButtonProps {
  selected: { name: string; check: null | boolean };
  handleChange: (bool: boolean, value: string, type: string) => void;
}

type TOption = {
  name: string;
  value: string;
  bool: boolean;
  type: string;
};

export const RadioButton: FC<RadioButtonProps> = ({
  selected,
  handleChange,
}) => {
  const option: TOption[] = [
    { name: 'Popular', value: 'popular', bool: false, type: 'byPopularity' },
    { name: 'Unpopular', value: 'UnPopular', bool: true, type: 'byPopularity' },
    { name: 'Cheap', value: 'cheap', bool: true, type: 'byPrice' },
    { name: 'Expensive', value: 'expensive', bool: false, type: 'byPrice' },
  ];

  return (
    <div className=" flex flex-wrap items-center justify-center gap-[8px] pt-[20px] sm:justify-start">
      {option.map(({ value, name, bool, type }: TOption) => (
        <label
          htmlFor={value}
          key={value}
          className={` w-[82px] cursor-pointer rounded-[30px] py-[14px] text-center text-[13px] font-medium leading-[125%] tracking-[-0.03em] sm:w-[102px] sm:text-[16px] ${selected.name === value ? 'text-[#fff]' : 'text-[#262626]'} ${selected.name === value ? 'bg-[#f6b83d]' : 'bg-[#fff]'} duration-250 transition-colors  ease-in-out hover:bg-[#f6b83d] hover:text-[#fff] focus:bg-[#f6b83d] focus:text-[#fff]`}
        >
          <span className=" mr-[4px] inline-block">{name}</span>
          {selected.name === value && <span className=" text-center">x</span>}
          <input
            type="radio"
            id={value}
            name={value}
            value={value}
            onClick={() => handleChange(bool, value, type)}
            onChange={() => {}}
            checked={selected.name === value}
            className=" hidden"
          />
        </label>
      ))}
    </div>
  );
};
