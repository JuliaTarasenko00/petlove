import Image from 'next/image';
import img from '/public/image/img_home_page.png';

const Home = () => {
  return (
    <section className="relative top-[-42px] left-[-20px] z-[-10] translate-y-[-42px]">
      <div className="container">
        <div className="flex items-end gap-[73px] w-[1440px] h-[384px] bg-[#f6b83d] rounded-[60px] m-auto px-[64px] pb-[32px]">
          <h1 className="font-bold text-[90px] text-[#fff] tracking-[-0.03rem] leading-[1.07] max-w-[760px]">
            Take good <span className="text-[#FFFFFF66]">care</span> of your
            small pets
          </h1>
          <p className="max-w-[255px] font-medium text-[#fff] text-[18px] tracking-[-0.02rem]">
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <div className="rounded-[60px] overflow-hidden w-max m-auto">
          <Image src={img} alt="" loading="lazy" width={1440} height={384} />
        </div>
      </div>
    </section>
  );
};

export default Home;
