import Footer from '../footer/Footer';
import { Header } from '../header/Header';

export const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <header className="pt-[43px]">
        <Header />
      </header>
      <main>{children}</main>
      <footer className="py-[20px] border-t-[3px] border-[#F6B83D]">
        <Footer />
      </footer>
    </>
  );
};
