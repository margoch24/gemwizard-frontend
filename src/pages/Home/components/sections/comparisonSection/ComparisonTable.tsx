import { FC, memo } from "react";
import {
  InterFont,
  LightColor,
  MainColor,
  SubtitleColor,
  TitleFont,
} from "../../../../../styles/constants";
import { Logo } from "common/components/wrappers/Logo";
import { LogoSizes, LogoTypes } from "common/types/components/logo";
import {
  COMPARISON_FEATURES,
  COMPARISON_FEATURES_LIST,
} from "common/constants";
import FeaturesDiamond from "../../../../../assets/featuresDiamond.svg";
import HeartIcon from "../../../../../assets/heart.svg";
import BrokenHeartIcon from "../../../../../assets/brokenHeart.svg";
import { useTranslation } from "react-i18next";
import { useLocaleContext } from "common/hooks/localeContext";

export const ComparisonTable: FC = memo(() => {
  const { retai, gemwiz } = COMPARISON_FEATURES;
  const { t } = useTranslation();
  const { language } = useLocaleContext();

  return (
    <div
      className="md:block hidden p-5 w-[85%] mx-auto"
      style={{ backgroundColor: LightColor }}
    >
      <table className="w-full text-left bg-gradient-to-b from-[#A1B4CB] to-[#DCCCF0]">
        <thead>
          <tr
            className={`${rowTailwindStyles} text-[24px] border-l border-t`}
            style={{
              color: MainColor,
              fontFamily: TitleFont,
              backgroundColor: LightColor,
              borderColor: LightColor,
            }}
          >
            <th className={colTailwindStyles}>
              <div className="flex flex-row items-center space-x-2">
                <img src={FeaturesDiamond} className="w-[32px] h-[32px]" />
                <h2 className="font-[600]">
                  {t("comparisonSection.tableHead.features")}
                </h2>
              </div>
            </th>
            <th className={`${colTailwindStyles} w-[33.3%]`}>
              <h2 className="font-[400]">
                {t("comparisonSection.tableHead.retail")}
              </h2>
            </th>
            <th
              className={colTailwindStyles}
              style={{ border: `1px solid ${MainColor}` }}
            >
              <div className="mr-auto w-fit">
                <Logo type={LogoTypes.DarkWithTitle} size={LogoSizes.s} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_FEATURES_LIST.map(({ key, title }) => (
            <tr
              key={key}
              style={{ border: "1px solid #E6F1F2" }}
              className={rowTailwindStyles}
            >
              <td
                style={{
                  borderRight: "1px solid #E6F1F2",
                  fontFamily: TitleFont,
                  color: MainColor,
                  backgroundColor: LightColor,
                }}
                className={`${colTailwindStyles} text-[20px] font-[600]`}
              >
                {t(title)}
              </td>
              <td
                style={{
                  borderRight: "1px solid #E6F1F2",
                  fontFamily: InterFont,
                  color: SubtitleColor,
                  backgroundColor: LightColor,
                }}
                className={`${colTailwindStyles} text-[14px] font-[500]`}
              >
                {typeof retai[key] === "object"
                  ? retai[key][language]
                  : retai[key]}
              </td>
              <td
                style={{ fontFamily: InterFont, color: SubtitleColor }}
                className={`${colTailwindStyles} text-[14px] font-[600]`}
              >
                <div className="flex flex-row items-center space-x-2">
                  <img src={HeartIcon} className="w-[27px] h-[27px]" />
                  <h2>
                    {typeof gemwiz[key] === "object"
                      ? gemwiz[key][language]
                      : gemwiz[key]}
                  </h2>
                </div>
              </td>
            </tr>
          ))}
          <tr
            className={rowTailwindStyles}
            style={{ border: "1px solid #E6F1F2" }}
          >
            <td
              style={{
                borderRight: "1px solid #E6F1F2",
                fontFamily: TitleFont,
                color: MainColor,
                backgroundColor: LightColor,
              }}
              className={`${colTailwindStyles} text-[20px] font-[600]`}
            >
              {t("comparisonSection.tableBody.price")}
            </td>
            <td
              style={{
                borderRight: "1px solid #E6F1F2",
                backgroundColor: LightColor,
              }}
              className={colTailwindStyles}
            >
              <div className="flex flex-row items-center space-x-2">
                <img src={BrokenHeartIcon} className="w-[16px] h-[16px]" />
                <h2
                  className="text-[20px] font-[400]"
                  style={{ fontFamily: InterFont, color: SubtitleColor }}
                >
                  <span className="font-[700]">{retai.price}</span>{" "}
                  {retai.currency}
                </h2>
              </div>
            </td>
            <td className={colTailwindStyles}>
              <div className="flex flex-row items-center space-x-2">
                <img src={HeartIcon} className="w-[27px] h-[27px]" />
                <h2
                  className="text-[20px] font-[400]"
                  style={{ fontFamily: InterFont, color: SubtitleColor }}
                >
                  <span className="font-[700]">{gemwiz.price}</span>{" "}
                  {gemwiz.currency}
                </h2>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

ComparisonTable.displayName = "ComparisonTable";

const rowTailwindStyles = "h-[70px]";
const colTailwindStyles = "p-3";
