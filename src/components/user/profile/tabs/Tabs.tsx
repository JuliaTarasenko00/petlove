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
    <div className=" w-[664px]">
      <div className="">
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => handleTabClick(index)}>
            {tab.title}
          </button>
        ))}
      </div>
      <>{tabs[activeTabIndex].content}</>
    </div>
  );
};
