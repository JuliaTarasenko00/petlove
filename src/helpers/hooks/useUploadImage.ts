'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const url = process.env.NEXT_PUBLIC_CLOUD_API;

export const useUploadImage = (selectedImage: File | null, id: string) => {
  const [patchImage, setPatchImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedImage) return;
    const uploadImage = async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('unique_id', id);
      formData.append('upload_preset', 'yywgwal3');
      formData.append('folder', 'petlove');

      try {
        setLoading(true);
        const response = await axios.post(url as string, formData);
        setPatchImage(response.data.url);
      } catch (error) {
        setLoading(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    uploadImage(selectedImage);
  }, [selectedImage]);

  return { patchImage, loading };
};
