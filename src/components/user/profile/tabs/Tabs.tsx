import { useState } from 'react';

type Tab = {
  title: string;
  content: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
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
      <>{tabs[activeTabIndex].content}</>
    </div>
  );
};
