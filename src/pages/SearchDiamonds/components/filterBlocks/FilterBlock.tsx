import { FC, ReactNode, memo, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MainColor } from "styles/constants";
import { FilterBlockThemesEnum } from "common/types/search_diamonds";

export const FilterBlock: FC<{
  children: ReactNode;
  theme: string;
  title: string;
}> = memo(({ children, title, theme }) => {
  const { heading } = FilterBlockThemes[theme];
  const [isDroppedDown, setIsDroppedDown] = useState<boolean>(true);

  const handleArrowClick = () => {
    setIsDroppedDown(!isDroppedDown);
  };

  return (
    <div
      className={`${
        isDroppedDown ? "max-[639px]:min-h-[170px]" : "h-[32px] overflow-hidden"
      } rounded-[6px] border border-[#CFD3D5] bg-white`}
    >
      <div
        onClick={handleArrowClick}
        className={`h-[32px] rounded-t-[6px] py-[8px] px-[11px] flex flex-row 
        items-center justify-between border-b border-[#CFD3D5] cursor-pointer`}
        style={heading}
      >
        <h2 className="text-[14px] font-[400]">{title}</h2>
        <div>
          {isDroppedDown ? (
            <IoIosArrowUp size={16} />
          ) : (
            <IoIosArrowDown size={16} />
          )}
        </div>
      </div>
      <div className="py-[31px] px-[27px]">{children}</div>
    </div>
  );
});

FilterBlock.displayName = "FilterBlock";

const FilterBlockThemes: {
  [key in string]: any;
} = {
  [FilterBlockThemesEnum.Dark]: {
    heading: {
      color: "#F9F9F7",
      backgroundColor: MainColor,
    },
  },
  [FilterBlockThemesEnum.Light]: {
    heading: {
      color: MainColor,
      backgroundColor: "#E6F1F2",
    },
  },
};
