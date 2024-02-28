import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { LayoutProvider } from '@/components/layoutProvider/LayoutProvider';

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
    <html lang="en">
      <body className={manrope.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
