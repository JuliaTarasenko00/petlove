'use client';
import { FormControl } from '@mui/material';
import {
  CustomMenuItem,
  CustomSelect,
  FirstMenuItem,
  style,
} from './FilterCustomStyle';
import { useAppDispatch } from '@/helpers/hooks/useActionHooks';
import { getCategories, getSex, getSpecies } from '@/redux/filter/operation';

interface SelectListProps {
  isLoading: boolean;
  categories: Array<string>;
  sex: Array<string>;
  species: Array<string>;
  handleChange: (event: any) => void;
}

export const SelectList = ({
  isLoading,
  categories,
  sex,
  species,
  handleChange,
}: SelectListProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <FormControl className="max-w-[143px] sm:w-[170px] sm:max-w-[100%] lg:w-[200px]">
        <CustomSelect
          defaultValue={0}
          name="category"
          MenuProps={{ PaperProps: { sx: style } }}
          onChange={handleChange}
          onOpen={() => dispatch(getCategories())}
        >
          <FirstMenuItem value={0}>Category</FirstMenuItem>
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            categories.map((category: string) => (
              <CustomMenuItem key={category} value={category}>
                {category}
              </CustomMenuItem>
            ))}
        </CustomSelect>
      </FormControl>
      <FormControl className="max-w-[143px] sm:w-[170px] sm:max-w-[100%] lg:w-[200px]">
        <CustomSelect
          defaultValue={0}
          name="sex"
          MenuProps={{ PaperProps: { sx: style } }}
          onChange={handleChange}
          onOpen={() => dispatch(getSex())}
        >
          <FirstMenuItem value={0}>By gender</FirstMenuItem>
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            sex.map((gender: string) => (
              <CustomMenuItem key={gender} value={gender}>
                {gender}
              </CustomMenuItem>
            ))}
        </CustomSelect>
      </FormControl>
      <FormControl className="max-w-[143px] sm:w-[170px] sm:max-w-[100%] lg:w-[200px]">
        <CustomSelect
          defaultValue={0}
          name="species"
          MenuProps={{ PaperProps: { sx: style } }}
          onChange={handleChange}
          onOpen={() => dispatch(getSpecies())}
        >
          <FirstMenuItem value={0}>By type</FirstMenuItem>
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            species.map((specie: string) => (
              <CustomMenuItem key={specie} value={specie}>
                {specie}
              </CustomMenuItem>
            ))}
        </CustomSelect>
      </FormControl>
    </>
  );
};
