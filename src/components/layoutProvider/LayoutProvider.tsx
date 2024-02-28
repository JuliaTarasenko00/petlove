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
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};
