'use client';
import { FormValue, SearchForm } from '@/components/ui/SearchForm';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { getCategories } from '@/redux/notices/operation';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { Label } from './FilterCustomStyle';

export const Filter = () => {
  const dispatch = useAppDispatch();
  const { categories, isLoading } = useAppSelector((state) => state.notices);
  const [category, setCategory] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const submitForm = (value: FormValue) => {
    console.log(value);
  };

  return (
    <div className="mt-[40px] rounded-[30px] bg-[#fff4df] p-[40px]">
      <SearchForm handelSubmitForm={submitForm} />
      <FormControl sx={{ width: 200 }}>
        <Label id="demo-simple-select-label">Category</Label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          onOpen={() => dispatch(getCategories())}
        >
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};
