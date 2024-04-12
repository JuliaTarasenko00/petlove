import Image from 'next/image';
import Link from 'next/link';
import img from '/public/image/404.webp';
import { routes } from '@/helpers/routes';

export default function NotFound() {
  return (
    <section className="py-[32px]">
      <div className="container h-[654px] max-w-[90%] rounded-[60px] bg-[#f6b83d] ">
        <div className="flex h-[100%] w-[100%] flex-col items-center justify-center">
          <Image
            src={img}
            alt="page not found"
            width={650}
            height={300}
            priority={true}
          />
          <p className="mt-[40px] text-[16px] font-bold leading-8 tracking-tight text-[#fff] sm:text-[24px]">
            Ooops! This page not found :(
          </p>
          <Link
            href={routes.main.main}
            className="duration-250 mt-[20px] rounded-[30px] bg-[#fff4df] px-[30px] py-[15px] text-[16px] font-bold tracking-tight text-[#f6b83d] transition-colors  ease-in-out hover:bg-[#fbe7c1] focus:bg-[#fbe7c1]"
          >
            To home page
          </Link>
        </div>
      </div>
    </section>
  );
}
