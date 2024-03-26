import Image from 'next/image';
import img from '/public/image/img_home_page.png';

const Home = () => {
  return (
    <section className="relative left-[-20px] top-[-42px] z-[-10] translate-y-[-42px]">
      <div className="container">
        <div className="m-auto flex h-[384px] w-[1440px] items-end gap-[73px] rounded-[60px] bg-[#f6b83d] px-[64px] pb-[32px]">
          <h1 className="max-w-[760px] text-[90px] font-bold leading-[1.07] tracking-[-0.03rem] text-[#fff]">
            Take good <span className="text-[#FFFFFF66]">care</span> of your
            small pets
          </h1>
          <p className="max-w-[255px] text-[18px] font-medium tracking-[-0.02rem] text-[#fff]">
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <div className="m-auto w-max overflow-hidden rounded-[60px]">
          <Image
            src={img}
            alt=""
            width={1440}
            height={384}
            priority={true}
            className="w-[1440px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
