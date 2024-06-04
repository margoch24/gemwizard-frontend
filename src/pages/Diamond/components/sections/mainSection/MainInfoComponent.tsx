import { CSSProperties, FC, memo } from "react";
import { DiamondType, DiamondTypeToTitle, Price } from "common/types/diamonds";
import {
  BorderColor,
  InterFont,
  MainColor,
  SubtitleColor,
  TitleFont,
} from "styles/constants";
import { ToggleBlock } from "common/components/wrappers/blocks/ToggleBlock";
import {
  ToggleBlockThemesEnum,
  ToggleButtonCheckedThemesEnum,
} from "common/types/search_diamonds";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Currencies } from "common/constants";
import { useTranslation } from "react-i18next";

export const MainInfoComponent: FC<{
  certificateId: string;
  type: string;
  priceProperties: Price;
}> = memo(({ certificateId, type, priceProperties }) => {
  const { price, currency } = priceProperties;
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <div className="flex sm:flex-row flex-col-reverse sm:items-center sm:space-x-5 justify-between">
        <h1
          className="font-[500] italic text-[36px] max-[369px]:text-[26px] sm:mt-0 mt-3 min-w-max"
          style={{ fontFamily: TitleFont, color: MainColor }}
        >
          {certificateId}
        </h1>
        <div
          className="rounded-[6px] px-[8px] py-[4px] w-fit"
          style={DiamondTypeDivStyles[type?.toLowerCase()]}
        >
          <h2
            className="font-[400] text-[14px] tracking-wide min-w-max"
            style={{ fontFamily: InterFont }}
          >
            {t(DiamondTypeToTitle[type?.toLowerCase()])}
          </h2>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-5">
        <div className="flex-1 flex flex-row items-center space-x-3">
          <h2
            className="text-[32px] max-[369px]:text-[26px] font-[600] min-[340px]:min-w-max"
            style={{ fontFamily: InterFont, color: SubtitleColor }}
          >
            {currency} {price?.toLocaleString()}
          </h2>
          <h2
            className="font-[600] text-[24px]"
            style={{ fontFamily: InterFont, color: BorderColor }}
          >
            {Currencies[currency]}
          </h2>
        </div>
        <div className="flex-1 sm:mt-0 mt-3">
          <div className="sm:min-w-max ml-auto">
            <ToggleBlock
              Icon={FaArrowTrendUp}
              toggleButtonTheme={ToggleButtonCheckedThemesEnum.Light}
              title={t("diamondPage.mainSection.toggleButtonTitle")}
              theme={ToggleBlockThemesEnum.Transparent}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

MainInfoComponent.displayName = "MainInfoComponent";
const DiamondTypeDivStyles: {
  [key in string]: CSSProperties;
} = {
  [DiamondType.LabGrown]: {
    backgroundColor: "#d8e9f1",
    border: "1px solid #10a0b9",
    color: "#10a0b9",
  },
  [DiamondType.NaturalDiamond]: {
    backgroundColor: "#DAF1D8",
    border: "1px solid #10B966",
    color: "#10B966",
  },
};
