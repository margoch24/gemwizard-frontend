import { FC, ReactNode, memo } from "react";
import { MainColor } from "styles/constants";

export const DetailsBlock: FC<{
  children: ReactNode;
  title: string;
}> = memo(({ children, title }) => {
  return (
    <div className={`rounded-[6px] border border-[#CFD3D5] bg-white h-full`}>
      <div
        className={`h-[32px] rounded-t-[6px] py-[8px] px-[11px] flex flex-row 
        items-center justify-between border-b border-[#CFD3D5]`}
        style={{
          color: "#F9F9F7",
          backgroundColor: MainColor,
        }}
      >
        <h2 className="text-[14px] font-[400] mx-auto">{title}</h2>
      </div>
      <div className="py-[31px] px-[27px]">{children}</div>
    </div>
  );
});

DetailsBlock.displayName = "DetailsBlock";
