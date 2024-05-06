'use client';

import { styleToastify } from '@/components/ui/styleToastify';
import { $instants } from '@/redux/request';
import { IPet, UserInformation } from '@/types/user';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useAddUserPet = (data: IPet) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccessfully, setIsSuccessfully] = useState<boolean>(false);

  const addPet = async (information: IPet) => {
    try {
      setIsLoading(true);
      await $instants.post<UserInformation>(
        '/users/current/pets/add',
        information,
      );
      setIsSuccessfully(true);
      toast.success(`${information.name} added successfully`, styleToastify);
    } catch (error: any) {
      setIsSuccessfully(false);
      toast.error(`Error adding pet: ${error.message}`, styleToastify);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      addPet(data);
    }
  }, [data]);

  return { isLoading, isSuccessfully };
};
