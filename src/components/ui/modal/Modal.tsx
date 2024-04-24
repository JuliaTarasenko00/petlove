'use client';

import React, { MouseEvent, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const ModalWindow = (props: ModalProps) => {
  const { onClose, children, open = false } = props;

  const onClickOverlay = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handelClickEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handelClickEsc);
    return () => {
      window.removeEventListener('keydown', handelClickEsc);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClickOverlay}
      className={` ${open ? '' : ' pointer-events-none invisible opacity-0'} fixed bottom-0 left-0 right-0  top-0 z-[1000] flex h-[100%] w-[100%] items-center justify-center bg-[#2626264d] transition-opacity duration-[350ms] ease-in-out`}
    >
      <div className=" relative rounded-[15px] bg-[#fff]  p-[20px] lg:p-[40px]">
        <button
          type="button"
          onClick={onClose}
          className=" absolute right-[20px] top-[20px]"
        >
          <IoClose className=" h-[24px] w-[24px] fill-[#262626]" />
        </button>
        {children}
      </div>
    </div>
  );
};
