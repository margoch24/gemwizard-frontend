import { FC, memo } from "react";
import { FiArrowRight } from "react-icons/fi";
import { ButtonTheme } from "../../../types/components/button";
import { MainColor } from "../../../../styles/constants";

export const Button: FC<{
  title: string;
  onClick?: () => void;
  theme?: string;
  limitedWidthMobile?: boolean;
  limitedWidthScreen?: boolean;
  centered?: boolean;
  titleFontFamily?: string;
  titleWide?: boolean;
}> = memo(
  ({
    title,
    onClick,
    theme = ButtonTheme.Dark,
    centered,
    limitedWidthMobile,
    limitedWidthScreen,
    titleFontFamily,
    titleWide,
  }) => {
    const { buttonStyle, textStyle, tailwindStyle } = ButtonThemes[theme];
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer  px-[24px] py-[14px] rounded-full flex flex-row justify-between items-center ${
          tailwindStyle ? tailwindStyle : ""
        } 
        transition-all duration-300 ${centered ? "mx-auto" : ""} ${
          limitedWidthMobile
            ? "md:w-[400px] md:hover:w-[450px] min-[420px]:w-[350px] min-[420px]:hover:w-[400px]"
            : ""
        }
        ${limitedWidthScreen ? "xl:w-[400px] xl:hover:w-[450px]" : ""}`}
        style={buttonStyle}
      >
        <h2
          className="md:text-lg text-[14px]"
          style={{
            ...textStyle,
            ...(titleFontFamily && { fontFamily: titleFontFamily }),
            ...(titleWide && { letterSpacing: "0.05em" }),
          }}
        >
          {title}
        </h2>
        <FiArrowRight style={textStyle} size={18} />
      </div>
    );
  }
);

Button.displayName = "Button";

const ButtonThemes: {
  [key in string]: any;
} = {
  [ButtonTheme.Dark]: {
    buttonStyle: {
      backgroundColor: MainColor,
    },
    textStyle: {
      color: "White",
    },
  },
  [ButtonTheme.Light]: {
    tailwindStyle: `bg-gradient-to-b from-[#A1B4CB] to-[#DCCCF0]`,
    buttonStyle: {
      border: `1px solid ${MainColor}`,
    },
    textStyle: {
      color: MainColor,
    },
  },
  [ButtonTheme.Transparent]: {
    buttonStyle: {
      backgroundColor: "#F9F9F7",
      border: `1px solid ${MainColor}`,
    },
    textStyle: {
      color: MainColor,
    },
  },
};
