import { $instants } from '@/redux/request';
import { PetInformationForModal } from '@/types/petMoreInformation';
import { useEffect, useState } from 'react';

export const useFetchNoticesId = (id: string) => {
  const [dataForModal, setDataForModal] =
    useState<PetInformationForModal | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const fetchNotices = async (id: string) => {
        try {
          setIsLoading(true);
          const { data } = await $instants.get(`/notices/${id}`);
          setDataForModal(data);
        } catch (error) {
          setIsLoading(true);
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchNotices(id);
    }
  }, [id]);
  return { dataForModal, isLoading };
};
