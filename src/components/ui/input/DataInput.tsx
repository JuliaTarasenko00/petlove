// @ts-nocheck
'use client';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './StyleForDateInput.module.css';
import { ForwardedRef, forwardRef } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { eachYearOfInterval, getMonth, getYear } from 'date-fns';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

interface DataInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  activeBorder?: boolean;
  value?: Date | null | undefined;
}

const months: Array<string> = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const start = new Date(2000, 0, 1);
const end = new Date();
const yearsInterval = { start, end };
const years = eachYearOfInterval(yearsInterval).map((date) => getYear(date));

export const DataInput = forwardRef<HTMLInputElement, DataInputProps>(
  (
    { value, errorMessage, activeBorder, ...rest },
    _ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const handleChange = (date: Date | null) => {
      if (rest.onChange) rest.onChange(date);
    };

    const classes = `${style.input} outline-none w-[100%] ${value ? 'text-[#262626]' : 'text-[#26262680]'}  rounded-[30px] border-[1px] outline-none ${activeBorder ? 'border-[#f6b83d]' : 'border-[#26262626]'} bg-transparent ${errorMessage && 'border-[2px] border-[#ef2447]'} outline-none outline-offset-0`;
    const classesButton = ' h-[20px] w-[20px] text-[#000]';
    const classesSelect = ' outline-none p-[5px] rounded-[30px]';

    return (
      <div className="w-[100%]">
        <div className="relative">
          <DatePicker
            {...rest}
            className={classes}
            placeholderText="00.00.0000"
            dateFormat="dd.MM.yyyy"
            showIcon
            toggleCalendarOnIconClick
            closeOnScroll={true}
            maxDate={new Date()}
            icon={<FiCalendar className={style.icon} />}
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className=" flex items-center justify-center">
                <button
                  onClick={decreaseMonth}
                  type="button"
                  disabled={prevMonthButtonDisabled}
                  className=" mr-[10px] "
                >
                  <GrFormPrevious className={classesButton} />
                </button>
                <select
                  value={getYear(date)}
                  className={`${classesSelect} mr-[5px]`}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  value={months[getMonth(date)]}
                  className={classesSelect}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <button
                  onClick={increaseMonth}
                  type="button"
                  className=" ml-[10px]"
                  disabled={nextMonthButtonDisabled}
                >
                  <GrFormNext className={classesButton} />
                </button>
              </div>
            )}
            selected={value}
            onChange={(date) => handleChange(date)}
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
