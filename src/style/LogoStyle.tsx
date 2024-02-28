import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LogoProps {
  href: string;
  children: React.ReactNode;
}

export default function Logo({ href, children }: LogoProps) {
  const location = usePathname();
  const mainPage = location === '/';

  const textStyle = mainPage ? 'text-white' : 'text-dark';

  return (
    <Link
      href={href}
      className={`flex items-center font-extrabold text-[28px] ${textStyle}`}
    >
      {children}
    </Link>
  );
}
