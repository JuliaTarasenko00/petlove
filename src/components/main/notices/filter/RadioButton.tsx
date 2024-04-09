'use client';

import { useState } from 'react';

type TOption = {
  name: string;
  value: string;
  bool: boolean;
};

type TState = {
  name: string;
  check: null | boolean;
};

export const RadioButton = () => {
  const [selected, setSelected] = useState<TState>({
    name: '',
    check: false,
  });

  const option: TOption[] = [
    { name: 'Popular', value: 'popular', bool: false },
    { name: 'Unpopular', value: 'UnPopular', bool: true },
    { name: 'Cheap', value: 'cheap', bool: true },
    { name: 'Expensive', value: 'expensive', bool: false },
  ];

  const handelChange = (bool: boolean, name: string) => {
    setSelected((prev) => {
      if (prev.name === name) {
        return { name: '', check: !bool };
      } else {
        console.log(bool);
        return { name, check: bool };
      }
    });
  };

  return (
    <div className=" flex flex-wrap items-center justify-center gap-[8px] pt-[20px] sm:justify-start">
      {option.map(({ value, name, bool }: TOption) => (
        <label
          htmlFor={value}
          key={value}
          className={` w-[72px] cursor-pointer rounded-[30px] py-[14px] text-center text-[13px] font-medium leading-[125%] tracking-[-0.03em] sm:w-[93px] sm:text-[16px] ${selected.name === value ? 'text-[#fff]' : 'text-[#262626]'} ${selected.name === value ? 'bg-[#f6b83d]' : 'bg-[#fff]'} duration-250 transition-colors  ease-in-out hover:bg-[#f6b83d] hover:text-[#fff] focus:bg-[#f6b83d] focus:text-[#fff]`}
        >
          <span className=" inline-block">{name}</span>
          {selected.name === value && <span className=" text-center">x</span>}
          <input
            type="radio"
            id={value}
            name={value}
            value={value}
            onClick={() => handelChange(bool, value)}
            onChange={() => {}}
            checked={selected.name === value}
            className=" hidden"
          />
        </label>
      ))}
    </div>
  );
};
