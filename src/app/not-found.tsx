import Image from 'next/image';
import Link from 'next/link';
import img from '/public/image/404.webp';

export default function NotFound() {
  return (
    <section className="py-[32px]">
      <div className="container bg-[#f6b83d] rounded-[60px] w-[1416px] h-[654px]">
        <div className="flex items-center flex-col justify-center w-[100%] h-[100%]">
          <Image
            src={img}
            alt="page not found"
            width={650}
            height={300}
            priority={true}
          />
          <p className="mt-[40px] font-bold text-[24px] text-[#fff] leading-8 tracking-tight">
            Ooops! This page not found :(
          </p>
          <Link
            href="/"
            className="mt-[20px] py-[15px] px-[30px] font-bold text-[16px] text-[#f6b83d] tracking-tight bg-[#fff4df] rounded-[30px] hover:bg-[#fbe7c1] focus:bg-[#fbe7c1]  transition-colors duration-250 ease-in-out"
          >
            To home page
          </Link>
        </div>
      </div>
    </section>
  );
}
