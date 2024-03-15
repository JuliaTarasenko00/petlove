'use client';
import { useCallback, useEffect, useState } from 'react';

export const useToggleModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return { open, toggleModal };
};
