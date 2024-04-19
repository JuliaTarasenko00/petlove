'use client';

import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { routes } from '@/helpers/routes';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const patch = usePathname();
  const userProfile = patch.split('/').includes('profile');
  const token = useAppSelector((state) => state.user.token);

  useEffect(() => {
    if (!token && userProfile) {
      router.replace(routes.main.login);
    }
  }, [token, router]);

  return <>{children}</>;
}
