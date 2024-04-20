'use client';
import { useEffect } from 'react';
import Footer from '../footer/Footer';
import { Header } from '../header/Header';
import { PrivateRoute } from '../privateRoute/PrivateRoute';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks/useActionHooks';
import { currentUser } from '@/redux/auth/operation';

export const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
  }, [token]);

  return (
    <>
      <header>
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
