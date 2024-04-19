import Footer from '../footer/Footer';
import { Header } from '../header/Header';
import { PrivateRoute } from '../privateRoute/PrivateRoute';

export const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <header className="">
        <Header />
      </header>
      <main>
        <PrivateRoute>{children}</PrivateRoute>
      </main>
      <footer className="border-t-[3px] border-[#F6B83D] py-[20px]">
        <Footer />
      </footer>
    </>
  );
};
