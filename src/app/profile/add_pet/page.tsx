'use client';
import withAuth from '@/components/privateRoute/PrivateRoute';
import { AddPetForm } from '@/components/user/addPets/AddPets';

const AddPet = () => {
  return <AddPetForm />;
};

export default withAuth(AddPet);
