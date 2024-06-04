import { FC, memo } from "react";
import {
  InterFont,
  LightColor,
  MainColor,
  SubtitleColor,
  TitleFont,
} from "../../../../../styles/constants";
import {
  COMPARISON_FEATURES,
  COMPARISON_FEATURES_LIST,
} from "common/constants";
import { Logo } from "common/components/wrappers/Logo";
import { LogoSizes, LogoTypes } from "common/types/components/logo";
import HeartIcon from "../../../../../assets/heart.svg";
import { useTranslation } from "react-i18next";
import BrokenHeartIcon from "../../../../../assets/brokenHeart.svg";
import { useLocaleContext } from "common/hooks/localeContext";

export const ComparisonMobileTable: FC = memo(() => {
  const { t } = useTranslation();
  const { retai, gemwiz } = COMPARISON_FEATURES;
  const { language } = useLocaleContext();

  return (
    <div className="md:hidden block" style={{ backgroundColor: LightColor }}>
      {COMPARISON_FEATURES_LIST.map(({ key, title }) => (
        <div key={key}>
          <div className="h-[70px] flex items-center justify-center">
            <h2
              className={`text-[20px] font-[600]`}
              style={{ color: MainColor, fontFamily: TitleFont }}
            >
              {t(title)}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <div className="w-full text-left bg-gradient-to-b from-[#A1B4CB] to-[#DCCCF0] border-y border-[#E6F1F2] min-w-[340px]">
              <div className="flex flex-row items-center">
                <div
                  className="w-1/2 text-center py-3 px-7 min-h-[70px] flex items-center"
                  style={{ backgroundColor: LightColor }}
                >
                  <h2
                    className={`font-[400] min-[490px]:text-[20px] text-[18px]`}
                    style={{ color: MainColor, fontFamily: TitleFont }}
                  >
                    {t("comparisonSection.tableHead.retail")}
                  </h2>{" "}
                </div>
                <div className="w-1/2 flex px-7 py-3">
                  <Logo type={LogoTypes.DarkWithTitle} size={LogoSizes.s} />{" "}
                </div>
              </div>
              <div className="flex flex-row items-center border-t border-[#E6F1F2]">
                <div
                  className="min-h-[70px] flex items-center px-7 py-3 w-1/2 border-l border-[#E6F1F2]"
                  style={{ backgroundColor: LightColor }}
                >
                  <h2
                    className={`text-[14px] font-[500]`}
                    style={{
                      fontFamily: InterFont,
                      color: SubtitleColor,
                    }}
                  >
                    {typeof retai[key] === "object"
                      ? retai[key][language]
                      : retai[key]}
                  </h2>
                </div>
                <div className="w-1/2">
                  <div
                    className={`flex flex-row items-center space-x-2 h-[70px] 
                px-7 max-[340px]:w-[150px]`}
                  >
                    <img src={HeartIcon} className="w-[27px] h-[27px]" />
                    <h2
                      style={{ fontFamily: InterFont, color: SubtitleColor }}
                      className={`text-[14px] font-[600]`}
                    >
                      {typeof gemwiz[key] === "object"
                        ? gemwiz[key][language]
                        : gemwiz[key]}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div>
        <div className="h-[70px] flex items-center justify-center">
          <h2
            className={`text-[20px] font-[600]`}
            style={{ color: MainColor, fontFamily: TitleFont }}
          >
            {t("comparisonSection.tableBody.price")}
          </h2>
        </div>
        <div className="overflow-x-auto">
          <div className="w-full text-left bg-gradient-to-b from-[#A1B4CB] to-[#DCCCF0] border-y border-[#E6F1F2] min-w-[340px]">
            <div className="flex flex-row items-center">
              <div
                className="w-1/2 text-center py-3 px-7 min-h-[70px] flex items-center"
                style={{ backgroundColor: LightColor }}
              >
                <h2
                  className={`font-[400] min-[490px]:text-[20px] text-[18px]`}
                  style={{ color: MainColor, fontFamily: TitleFont }}
                >
                  {t("comparisonSection.tableHead.retail")}
                </h2>{" "}
              </div>
              <div className="w-1/2 flex px-7 py-3">
                <Logo type={LogoTypes.DarkWithTitle} size={LogoSizes.s} />{" "}
              </div>
            </div>
            <div className="flex flex-row items-center border-t border-[#E6F1F2]">
              <div
                className="w-1/2 py-3 px-7 min-h-[70px] flex items-center space-x-2 border-l border-[#E6F1F2]"
                style={{ backgroundColor: LightColor }}
              >
                <img src={BrokenHeartIcon} className="w-[16px] h-[16px]" />
                <h2
                  className="text-[14px] font-[400]"
                  style={{ fontFamily: InterFont, color: SubtitleColor }}
                >
                  <span className="font-[700]">{retai.price}</span>{" "}
                  {retai.currency}
                </h2>
              </div>
              <div className="w-1/2 py-3 px-7 min-h-[70px] flex items-center space-x-2">
                <img src={HeartIcon} className="w-[27px] h-[27px]" />
                <h2
                  className="text-[14px] font-[400]"
                  style={{ fontFamily: InterFont, color: SubtitleColor }}
                >
                  <span className="font-[700]">{gemwiz.price}</span>{" "}
                  {gemwiz.currency}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ComparisonMobileTable.displayName = "ComparisonMobileTable";
