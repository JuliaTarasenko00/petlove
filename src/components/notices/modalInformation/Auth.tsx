import { Rating } from '@mui/material';
import { MdOutlineStar } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { Span, Text } from '@/components/ui/TextNotices';
import { Pet } from '@/types/petMoreInformations';

const data: Pet = {
  _id: '6589436d05a6bcd9b9379424',
  species: 'cat',
  category: 'sell',
  price: 130,
  title: 'Persian Cat for Sale',
  name: 'Fluffy',
  birthday: '2019-06-20',
  comment: 'Gorgeous Persian cat available for adoption.',
  sex: 'female',
  location: {
    _id: '641ffcd4ae4e889a02d2a6be',
    stateEn: 'Chernivetska',
    cityEn: 'Shepit',
  },
  imgURL: 'https://ftp.goit.study/img/pets/6.webp',
  createdAt: '2023-12-11T10:43:28.477Z',
  user: {
    _id: '6576e7d0c4cc99fc5ef94221',
    email: 'test@gmail.com',
    phone: '+380730000000',
  },
  popularity: 2,
  updatedAt: '2024-03-15T14:59:31.733Z',
};

export const ModalInformationAuth = () => {
  const {
    _id,
    species,
    category,
    price,
    title,
    name,
    birthday,
    comment,
    sex,
    location,
    imgURL,
    user,
    popularity,
  } = data;

  return (
    <div className=" w-[393px] flex flex-col items-center">
      <div className=" relative">
        <img
          src={imgURL}
          alt={title}
          loading="lazy"
          width="150"
          height="150"
          className=" rounded-[100px] max-w-[150px] max-h-[150px] object-cover object-center mb-[24px]"
        />
        <p className=" bg-[#fff4df] absolute capitalize top-0 left-0 py-[8px] px-[14px] rounded-[30px] font-medium text-[14px] text-[#f6b83d]">
          {category}
        </p>
      </div>
      <h3 className="mb-[10px] font-bold text-[18px] text-[#2b2b2a] leading-[133%]">
        {title}
      </h3>
      <div className=" flex items-center gap-[5px] mb-[20px]">
        <Rating
          value={popularity}
          readOnly
          precision={0.5}
          sx={{
            '& .MuiRating-iconFilled': {
              color: '#ffc531',
              zIndex: 100,
              position: 'relative',
            },
          }}
          emptyIcon={<MdOutlineStar style={{ opacity: 0.35 }} />}
        />
        <p className=" flex items-center gap-[5px] text-[#262626] text-[16px] font-medium">
          {popularity}
        </p>
      </div>
      <ul className=" flex items-center justify-center gap-[20px] mb-[18px]">
        <li>
          <Text>
            <Span>Name</Span>
            {name}
          </Text>
        </li>
        <li>
          <Text>
            <Span>Birthday</Span>
            {birthday}
          </Text>
        </li>
        <li>
          <Text>
            <Span>Sex</Span>
            {sex}
          </Text>
        </li>
        <li>
          <Text>
            <Span>Species</Span>
            {species}
          </Text>
        </li>
      </ul>
      <p className=" font-medium up text-[14px] text-[#2b2b2a] tracking-tight leading-[129%] mb-[20px]">
        {comment}
      </p>
      <div className=" mb-[20px] flex flex-col gap-[5px]">
        <p className=" font-medium text-[14px] text-[#2b2b2a] tracking-tight leading-[129%] ">
          <span className=" text-[#26262680] mr-[5px]"> Region:</span>
          {location.stateEn}
        </p>
        <p className=" font-medium text-[14px] text-[#2b2b2a] tracking-tight leading-[129%] ">
          <span className=" text-[#26262680] mr-[5px] ">City:</span>
          {location.cityEn}
        </p>
      </div>
      <div className="flex items-center gap-[15px]">
        <button
          type="button"
          className="flex items-center gap-[5px] px-[42px] py-[15px] font-bold text-[16px] text-white rounded-[30px] bg-[#f6b83d]  hover:bg-[#f9b020] focus:bg-[#f9b020] transition-colors duration-250 ease-in-out"
        >
          Add to {<FaRegHeart />}
        </button>
        <a
          href={`tel:${user.phone}`}
          className="px-[42px] py-[15px] font-bold text-[16px] uppercase rounded-[30px] bg-[#fff4df] text-[#f6b83d] hover:bg-[#fbe7c1] focus:bg-[#fbe7c1]  transition-colors duration-250 ease-in-out"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
