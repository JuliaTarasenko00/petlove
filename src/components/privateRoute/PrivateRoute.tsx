'use client';

import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { routes } from '@/helpers/routes';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const patch = usePathname();
  const userProfile = patch.split('/').includes('profile');
  const register = patch.includes(routes.main.register);
  const login = patch.includes(routes.main.login);
  const token = useAppSelector((state) => state.user.token);

  useEffect(() => {
    if (!token && userProfile) {
      router.replace(routes.main.login);
    }

    if (token && register) {
      router.replace(routes.user.profile);
    }

    if (token && login) {
      router.replace(routes.user.profile);
    }
  }, [token, router]);

  return <>{children}</>;
}
