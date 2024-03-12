export const Span = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className=" text-[#26262680] text-[10px] tracking-tight leading-[140%]">
      {children}
    </span>
  );
};

export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="flex flex-col text-[#262626] text-[12px] tracking-tight leading-[117%]">
      {children}
    </p>
  );
};
