import { DIAMONDS_TABLE_TITLES } from "common/constants/index";
import { FC, memo, useState } from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const DiamondsListTitle: FC<{
  tableTitle: {
    Icon?: IconType;
    title?: string;
    sort?: boolean;
    centered?: boolean;
    mobileHidden?: boolean;
  };
}> = memo(({ tableTitle: { Icon, title, sort, centered, mobileHidden } }) => {
  const [isAscending, setIsAscending] = useState(false);
  const toggleSort = () => {
    setIsAscending(!isAscending);
  };
  return (
    <th
      style={{ width: `${100 / DIAMONDS_TABLE_TITLES.length}%` }}
      className={`${sort ? "cursor-pointer" : ""} max-[500px]:!w-auto ${
        mobileHidden ? "max-[500px]:hidden" : ""
      }`}
      onClick={toggleSort}
    >
      {Icon ? (
        <div
          className={`flex ${
            centered ? "justify-center" : "justify-start"
          } w-[55px]`}
        >
          <Icon size={16} />
        </div>
      ) : (
        <div
          className={`flex flex-row space-x-1 ${
            centered ? "justify-center" : "justify-start"
          } items-center`}
        >
          <h2 className="sm:text-[14px] text-[13px] font-[400]">{title}</h2>
          {sort ? (
            isAscending ? (
              <IoIosArrowUp className="md:block hidden" size={16} />
            ) : (
              <IoIosArrowDown className="md:block hidden" size={16} />
            )
          ) : (
            ""
          )}
        </div>
      )}
    </th>
  );
});

DiamondsListTitle.displayName = "DiamondsListTitle";
