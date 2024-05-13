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
  selected: {
    category: string;
    species: string;
  };
}

export const SelectList = ({
  isLoading,
  categories,
  species,
  handleChange,
  selected,
}: SelectListProps) => {
  const dispatch = useAppDispatch();

  const styleSpan = `absolute left-[16px] top-[50%] z-10 translate-y-[-50%] text-[#262626]`;

  return (
    <>
      <FormControl className="w-[100%] sm:w-[170px] lg:w-[200px]">
        <span
          className={`${styleSpan} ${!!selected.category ? ' hidden ' : ' block'}`}
        >
          Category
        </span>
        <CustomSelect
          value={selected.category}
          name="category"
          placeholder="Category"
          MenuProps={{ PaperProps: { sx: style } }}
          onChange={handleChange}
          onOpen={() => {
            if (!categories.length) dispatch(getCategories());
          }}
        >
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
        <span
          className={`${styleSpan} ${!!selected.species ? ' hidden ' : ' block'}`}
        >
          By Type
        </span>
        <CustomSelect
          value={selected.species}
          name="species"
          MenuProps={{ PaperProps: { sx: style } }}
          onChange={handleChange}
          onOpen={() => {
            if (!species.length) dispatch(getSpecies());
          }}
        >
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
