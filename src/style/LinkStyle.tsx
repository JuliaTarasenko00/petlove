import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const location = usePathname();
  const isActive = location === href;
  const mainPage = location === '/';

  const borderStyle = mainPage
    ? 'border-[rgba(255, 255, 255, 0.4)]'
    : isActive
      ? 'border-[#f6b83d]'
      : 'border-[rgba(38, 38, 38, 0.15)]';

  return (
    <Link
      href={href}
      className={`mr-[10px] last:mr-0 border-[1px] px-[15px] py-[20px] ${borderStyle}`}
    >
      {children}
    </Link>
  );
}
