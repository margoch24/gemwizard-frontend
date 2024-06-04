import { FC, memo } from "react";
import { IconType } from "react-icons";
import { BorderColor, SubtitleColor } from "styles/constants";

export const StyledButton: FC<{
  title: string;
  Icon: IconType;
  onClick?: () => void;
  width?: number;
}> = memo(({ title, Icon, onClick, width = 100 }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`cursor-pointer py-[8px] px-[16px] rounded-[4px] border max-[639px]:!w-auto 
      flex flex-row justify-center space-x-3 items-center flex-1`}
      style={{ borderColor: BorderColor, width }}
    >
      <h2
        className="font-[Inter] font-[400] text-[12px]"
        style={{ color: SubtitleColor }}
      >
        {title}
      </h2>
      <Icon color={SubtitleColor} size={16} />
    </div>
  );
});

StyledButton.displayName = "StyledButton";
