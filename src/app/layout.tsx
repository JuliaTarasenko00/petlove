import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import ProviderComponent from './provider';
import { LayoutProvider } from '@/components/layoutProvider/LayoutProvider';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const manrope = Manrope({
  weight: ['400', '500', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Petl💛ve',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={manrope.className}>
        <ProviderComponent>
          <LayoutProvider>{children}</LayoutProvider>
          <ToastContainer />
        </ProviderComponent>
      </body>
    </html>
  );
}
