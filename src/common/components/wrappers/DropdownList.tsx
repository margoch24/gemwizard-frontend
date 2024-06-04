import { FC, memo, useState } from "react";
import { SubtitleColor } from "../../../styles/constants";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const DropdownList: FC<{
  className?: string;
  title: string;
  id: string;
}> = memo(({ className = "", title, id }) => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const toggleList = () => {
    setIsDroppedDown(!isDroppedDown);
  };

  return (
    <div
      onClick={toggleList}
      className={`${className} cursor-pointer flex flex-row items-center space-x-1`}
      key={id}
    >
      <h2 style={{ color: SubtitleColor }}>{title}</h2>
      {isDroppedDown ? (
        <IoIosArrowUp color={SubtitleColor} />
      ) : (
        <IoIosArrowDown color={SubtitleColor} />
      )}
    </div>
  );
});

DropdownList.displayName = "DropdownList";
