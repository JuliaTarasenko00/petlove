'use client';
import Image from 'next/image';
import image from '/public/image/image_dog_add_pets.webp';
import { IoFemaleSharp, IoMale, IoMaleFemale } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

interface IListSelect {
  name: string;
  element: any;
  style: string;
}

export const AddPetForm = () => {
  const listSelect: IListSelect[] = [
    {
      name: 'female',
      element: <IoMale />,
      style:
        'bg-[red] w-[40px] h-[40px] rounded-[30px] flex items-center justify-center',
    },
    {
      name: 'male',
      element: <IoFemaleSharp />,
      style:
        'bg-[blue] w-[40px] h-[40px] rounded-[30px] flex items-center justify-center',
    },
    {
      name: 'multiple',
      element: <IoMaleFemale />,
      style:
        'bg-[green] w-[40px] h-[40px] rounded-[30px] flex items-center justify-center',
    },
  ];

  const {} = useForm({});

  return (
    <section className="py-[32px]">
      <div className=" container flex items-center justify-center gap-[32px]">
        <div>
          <Image
            src={image}
            alt="Dog"
            width={592}
            height={654}
            priority={true}
            className=" h-[654px] w-[592px] rounded-[60px]"
          />
        </div>
        <div className=" w-[592px] rounded-[60px] bg-[#fff] px-[80px] py-[60px]">
          <h3>
            Add my pet / <span>Personal details</span>
          </h3>
          <ul className=" flex items-center gap-[8px]">
            {listSelect.map(({ element, name, style }) => (
              <li key={name} className={style}>
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
