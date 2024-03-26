'use client';

import React, { MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export const ModalWindow = (props: ModalProps) => {
  const { onClose, children } = props;

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

      window.addEventListener('keydown', handelClickEsc);
      return () => {
        window.removeEventListener('keydown', handelClickEsc);
      };
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={onClickOverlay}
      className=" fixed bottom-0 top-0 z-[1000] flex h-[100%] w-[100%] items-center justify-center bg-[#2626264d]"
    >
      <div className=" relative rounded-[15px] bg-[#fff]  p-[40px]">
        <button
          type="button"
          onClick={onClose}
          className=" absolute right-[20px] top-[20px]"
        >
          <IoClose className=" h-[24px] w-[24px] fill-[#262626]" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
