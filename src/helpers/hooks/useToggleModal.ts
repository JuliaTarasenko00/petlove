'use client';
import { useCallback, useEffect, useState } from 'react';

export const useToggleModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalWithName, setModalWithName] = useState({
    open: false,
    name: '',
  });

  const toggleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const openModalWithName = useCallback((name: string) => {
    setModalWithName({ open: true, name });
  }, []);

  const closeModalWithName = useCallback(() => {
    setModalWithName({ open: false, name: '' });
  }, []);

  useEffect(() => {
    if (open || modalWithName.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open, modalWithName.open]);

  return {
    open,
    toggleModal,
    openModalWithName,
    closeModalWithName,
    modalWithName,
  };
};
