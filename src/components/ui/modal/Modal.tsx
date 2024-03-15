'use client';

import React, { MouseEvent, useEffect } from 'react';
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

  return (
    <div
      onClick={onClickOverlay}
      className=" fixed top-0 bottom-0 w-[100%] h-[100%] flex justify-center items-center z-[1000] bg-[#2626264d]"
    >
      <div className=" relative bg-[#fff] rounded-[15px]  p-[40px]">
        <button
          type="button"
          onClick={onClose}
          className=" absolute top-[20px] right-[20px]"
        >
          <IoClose className=" fill-[#262626] w-[24px] h-[24px]" />
        </button>
        {children}
      </div>
    </div>
  );
};
