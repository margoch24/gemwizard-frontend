import { FC, memo } from "react";
import { MainColor, LightColor } from "../../../styles/constants";
import { LogoTypes } from "../../types/components/logo";
import LogoWithTitleLight from "../../../assets/logoWithTitleLight.svg";
import LogoWithTitleDark from "../../../assets/logoWithTitleDark.svg";
import LogoIconLight from "../../../assets/logoLight.svg";
import LogoIconDark from "../../../assets/logoDark.svg";

export const Logo: FC<{
  size: string;
  type?: string;
}> = memo(({ size, type = LogoTypes.Dark }) => {
  return (
    <div>
      <img src={LogoTypeToImage[type]} className={`mx-auto ${size}`} />
    </div>
  );
});

Logo.displayName = "Logo";

const LogoTypeToImage = {
  [LogoTypes.Dark]: LogoIconDark,
  [LogoTypes.DarkWithTitle]: LogoWithTitleDark,
  [LogoTypes.Light]: LogoIconLight,
  [LogoTypes.LightWithTitle]: LogoWithTitleLight,
};
