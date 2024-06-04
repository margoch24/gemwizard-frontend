import { ToggleBlockThemesEnum } from "common/types/search_diamonds";
import { FC, memo, useState } from "react";
import { MainColor } from "styles/constants";
import { ToggleButton } from "../buttons/ToggleButton";
import { IconType } from "react-icons";

export const ToggleBlock: FC<{
  title: string;
  theme?: string;
  toggleButtonTheme?: string;
  Icon?: IconType;
}> = memo(
  ({ title, theme = ToggleBlockThemesEnum.White, toggleButtonTheme, Icon }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleClick = () => {
      setIsChecked(!isChecked);
    };

    return (
      <div
        className={`rounded-[6px] border border-[#CFD3D5] ${
          toggleBlockThemes[theme] || ""
        }`}
      >
        <div
          className={`min-h-[32px] rounded-[6px] px-[11px] flex flex-row 
        items-center justify-between space-x-2`}
          style={{ color: MainColor }}
        >
          <div className="flex flex-row items-center">
            {Icon && <Icon className="mr-3" size={16} color={MainColor} />}
            <h2 className="text-[14px] font-[400] max-[293px]:text-[12px]">
              {title}
            </h2>
          </div>
          <div className="flex">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <ToggleButton
                theme={toggleButtonTheme}
                onClick={handleClick}
                checked={isChecked}
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
);

ToggleBlock.displayName = "ToggleBlock";

const toggleBlockThemes = {
  [ToggleBlockThemesEnum.Light]: "bg-[#E6F1F2]",
  [ToggleBlockThemesEnum.White]: "bg-white",
  [ToggleBlockThemesEnum.Transparent]: "bg-inherit",
};
