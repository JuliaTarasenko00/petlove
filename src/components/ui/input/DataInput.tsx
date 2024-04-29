// @ts-nocheck
'use client';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './StyleForDateInput.module.css';
import { ForwardedRef, forwardRef } from 'react';
import { FiCalendar } from 'react-icons/fi';

interface DataInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  activeBorder?: boolean;
  value?: Date | null | undefined;
}

export const DataInput = forwardRef<HTMLInputElement, DataInputProps>(
  (
    { value, errorMessage, activeBorder, ...rest },
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const handleChange = (date: Date | null) => {
      if (rest.onChange) rest.onChange(date);
    };

    const classes = `${style.input} w-[100%] ${value ? 'text-[#262626]' : 'text-[#26262680]'}  rounded-[30px] border-[1px] outline-none ${activeBorder ? 'border-[#f6b83d]' : 'border-[#26262626]'} bg-transparent ${errorMessage && 'border-[2px] border-[#ef2447]'} outline-none outline-offset-0`;

    return (
      <div className="w-[100%]">
        <div className="relative">
          <DatePicker
            {...rest}
            selected={value}
            placeholderText="00.00.0000"
            onChange={handleChange}
            dateFormat="dd.MM.yyyy"
            showIcon
            toggleCalendarOnIconClick
            closeOnScroll={true}
            maxDate={new Date()}
            icon={<FiCalendar className={style.icon} />}
            className={classes}
          />
        </div>
        {errorMessage && (
          <p className="mt-[4px] text-[12px] leading-[117%] tracking-[-0.03em] text-[#ef2447]">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

DataInput.displayName = 'DataInput';
