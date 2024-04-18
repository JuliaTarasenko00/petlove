'use client';
import withAuth from '@/components/privateRoute/PrivateRoute';
import { Profile } from '@/components/user/profile/Profile';

function UserPage() {
  return <Profile />;
}

export default withAuth(UserPage);
