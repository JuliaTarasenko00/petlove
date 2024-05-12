import Image from 'next/image';
import image from '/public/image/not_found.png';

export const FilterNotFound = ({ name }: { name?: string }) => {
  return (
    <div className=" flex  justify-center">
      <div className=" flex max-w-[900px] flex-wrap items-center justify-center gap-[50px] rounded-[20px] bg-[#f6b83d] p-[20px]">
        <Image
          src={image}
          alt="This name not found"
          width={300}
          height={200}
          className=" w-[300px]"
        />
        {name && (
          <h3 className=" text-center text-[24px] font-bold text-[#fff]">
            Oppppsss! This name "{name}" not found
          </h3>
        )}
        {!name && (
          <h3 className=" text-center text-[24px] font-bold text-[#fff]">
            Oppppsss! Nothing was found for this filter
          </h3>
        )}
      </div>
    </div>
  );
};
