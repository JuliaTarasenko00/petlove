export const Span = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className=" text-[10px] leading-[140%] tracking-tight text-[#26262680]">
      {children}
    </span>
  );
};

export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="flex flex-col text-[12px] leading-[117%] tracking-tight text-[#262626]">
      {children}
    </p>
  );
};
