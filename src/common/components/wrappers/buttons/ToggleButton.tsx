import { ToggleButtonCheckedThemesEnum } from "common/types/search_diamonds";
import { FC, memo } from "react";
import { MainColor } from "styles/constants";

export const ToggleButton: FC<{
  onClick?: () => void;
  checked: boolean;
  theme?: string;
}> = memo(
  ({ onClick, checked, theme = ToggleButtonCheckedThemesEnum.Dark }) => {
    const { box, circle } = ToggleButtonCheckedThemes[theme];
    return (
      <div
        className={`relative w-10 h-[19px] rounded-full  cursor-pointer
              border-black border-opacity-[0.08] border`}
        style={{ backgroundColor: checked ? box.backgroundColor : "#F2F2F2" }}
        onClick={onClick}
      >
        <div
          style={{
            boxShadow: "0px 0px 4px 0px #0000001F",
            backgroundColor: checked ? circle.backgroundColor : "#fff",
          }}
          className={`h-[17px] w-[17px] rounded-full absolute top-0 transition-all duration-300 ${
            checked ? "translate-x-[120%]" : "translate-x-[5%]"
          }`}
        >
          <div
            style={{
              boxShadow: "0px 1px 1px 0px #00000029",
            }}
            className="h-full w-full rounded-full"
          ></div>
        </div>
      </div>
    );
  }
);

ToggleButton.displayName = "ToggleButton";

const ToggleButtonCheckedThemes = {
  [ToggleButtonCheckedThemesEnum.Light]: {
    box: {
      backgroundColor: "#F2F2F2",
    },
    circle: {
      backgroundColor: MainColor,
    },
  },
  [ToggleButtonCheckedThemesEnum.Dark]: {
    box: {
      backgroundColor: MainColor,
    },
    circle: {
      backgroundColor: "#fff",
    },
  },
};
