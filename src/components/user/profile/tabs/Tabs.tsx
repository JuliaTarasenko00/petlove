'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Tab = {
  title: string;
  content: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="lg:w-[calc(100%-520px)]">
      <div className=" mb-[32px] flex items-center gap-[8px]">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${activeTabIndex === index ? 'text-[#fff]' : 'text-[#262626]'} outline-none ${activeTabIndex === index ? 'bg-[#f6b83d]' : 'bg-[#fff]'} rounded-[30px] px-[45px] py-[14px]`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <motion.div
        layoutId="underline"
        key={activeTabIndex}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {tabs[activeTabIndex].content}
      </motion.div>
    </div>
  );
};
