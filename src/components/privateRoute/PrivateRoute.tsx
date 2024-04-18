'use client';

import { useAppSelector } from '@/helpers/hooks/useActionHooks';
import { routes } from '@/helpers/routes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component: React.ElementType) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const token = useAppSelector((state) => state.user.token);

    useEffect(() => {
      if (!token) {
        router.replace(routes.main.login);
      }
    }, [token, router]);

    return <Component {...props} />;
  };
}
