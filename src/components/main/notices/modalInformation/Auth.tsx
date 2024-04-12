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
    <div className=" flex w-[100%] flex-col  items-center sm:w-[335px] md:w-[473px]">
      <div className=" relative">
        <img
          src={imgURL}
          alt={title}
          loading="lazy"
          width="150"
          height="150"
          className=" mb-[24px] max-h-[150px] max-w-[150px] rounded-[100px] object-cover object-center"
        />
        <p className=" absolute left-0 top-0 rounded-[30px] bg-[#fff4df] px-[14px] py-[8px] text-[14px] font-medium capitalize text-[#f6b83d]">
          {category}
        </p>
      </div>
      <h3 className="mb-[10px] text-[18px] font-bold leading-[133%] text-[#2b2b2a]">
        {title}
      </h3>
      <div className=" mb-[20px] flex items-center gap-[5px]">
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
        <p className=" flex items-center gap-[5px] text-[16px] font-medium text-[#262626]">
          {popularity}
        </p>
      </div>
      <ul className=" mb-[18px] flex items-center justify-center gap-[20px]">
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
      <p className=" up mb-[20px] text-[14px] font-medium leading-[129%] tracking-tight text-[#2b2b2a]">
        {comment}
      </p>
      <div className=" mb-[20px] flex flex-col gap-[5px]">
        <p className=" text-[14px] font-medium leading-[129%] tracking-tight text-[#2b2b2a] ">
          <span className=" mr-[5px] text-[#26262680]"> Region:</span>
          {location.stateEn}
        </p>
        <p className=" text-[14px] font-medium leading-[129%] tracking-tight text-[#2b2b2a] ">
          <span className=" mr-[5px] text-[#26262680] ">City:</span>
          {location.cityEn}
        </p>
      </div>
      <div className="flex items-center gap-[5px] sm:gap-[15px]">
        <button
          type="button"
          className="duration-250 flex items-center gap-[5px] rounded-[30px] bg-[#f6b83d] px-[20px] py-[10px] text-[16px] font-bold text-white transition-colors  ease-in-out hover:bg-[#f9b020] focus:bg-[#f9b020] sm:px-[42px] sm:py-[15px]"
        >
          Add to {<FaRegHeart />}
        </button>
        <a
          href={`tel:${user.phone}`}
          className="duration-250 rounded-[30px] bg-[#fff4df] px-[20px] py-[10px] text-[16px] font-bold uppercase text-[#f6b83d] transition-colors ease-in-out hover:bg-[#fbe7c1]  focus:bg-[#fbe7c1] sm:px-[42px] sm:py-[15px]"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
