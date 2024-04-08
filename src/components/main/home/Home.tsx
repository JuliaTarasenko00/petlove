import Image from 'next/image';
import img from '/public/image/img_home_page.png';

const Home = () => {
  return (
    <section className=" pb-[30px]">
      <div className="container">
        <div className=" flex h-[390px] w-[100%] items-end rounded-[30px] bg-[#f6b83d] px-[calc(20px+(64-20)*((100vw-320px)/(768-320)))] pb-[50px] sm:h-[496px] sm:rounded-[60px] md:px-[64px] md:pb-[32px] xl:h-[384px]">
          <div className="flex flex-wrap items-end gap-[24px] xl:gap-[73px]">
            <h1 className="w-[100%] max-w-[760px] text-[calc(40px+(80-40)*((100vw-320px)/(1290-320)))] font-bold leading-[1.07] tracking-[-0.03rem] text-[#fff] xl:text-[90px]">
              Take good <span className="text-[#FFFFFF66]">care</span> of your
              small pets
            </h1>
            <p className=" ml-0 max-w-[255px] text-[calc(14px+(18-14)*((100vw-320px)/(1440-320)))] font-medium tracking-[-0.02rem] text-[#fff] sm:ml-auto xl:ml-0">
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
        </div>
        <div className="m-auto w-[100%] overflow-hidden rounded-[30px] sm:rounded-[60px]">
          <Image
            src={img}
            alt=""
            width={1440}
            height={496}
            priority={true}
            className=" h-[402px] w-[100%] object-cover object-center sm:h-[496px] lg:h-[384px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
