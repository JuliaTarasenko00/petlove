'use client';
import { FormControl } from '@mui/material';
import {
  CustomMenuItem,
  CustomSelect,
  FirstMenuItem,
  style,
} from './FilterCustomStyle';
import { useAppDispatch } from '@/helpers/hooks/useActionHooks';
import { getCategories, getSpecies } from '@/redux/filter/operation';
import { LoaderForComponents } from '@/components/ui/loader/LoaderForComponent';

interface SelectListProps {
  isLoading: boolean;
  categories: Array<string>;
  species: Array<string>;
  handleChange: (event: any) => void;
}

export const SelectList = ({
  isLoading,
  categories,
  species,
  handleChange,
}: SelectListProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <FormControl className="w-[100%] sm:w-[170px] lg:w-[200px]">
        <CustomSelect
          defaultValue={0}
          name="category"
          MenuProps={{ PaperProps: { sx: style } }}
          onChange={handleChange}
          onOpen={() => dispatch(getCategories())}
        >
          <FirstMenuItem value={0}>Category</FirstMenuItem>
          {isLoading && (
            <div className=" flex items-center justify-center">
              <LoaderForComponents />
            </div>
          )}
          {!isLoading &&
            categories.map((category: string) => (
              <CustomMenuItem key={category} value={category}>
                {category}
              </CustomMenuItem>
            ))}
        </CustomSelect>
      </FormControl>
      <FormControl className="w-[46%] max-w-[100%] sm:w-[170px] sm:max-w-[100%] lg:w-[200px]">
        <CustomSelect
          defaultValue={0}
          name="species"
          MenuProps={{ PaperProps: { sx: style } }}
          onChange={handleChange}
          onOpen={() => dispatch(getSpecies())}
        >
          <FirstMenuItem value={0}>By type</FirstMenuItem>
          {isLoading && (
            <div className=" flex items-center justify-center">
              <LoaderForComponents />
            </div>
          )}
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
