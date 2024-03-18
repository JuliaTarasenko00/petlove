import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { LayoutProvider } from '@/components/layoutProvider/LayoutProvider';
import './globals.css';
import ProviderComponent from './provider';

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
        </ProviderComponent>
      </body>
    </html>
  );
}
