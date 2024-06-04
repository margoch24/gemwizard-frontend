import { DiamondDetailsBlocks } from "common/mocks/diamond/diamond_details_blocks";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import {
  BorderColor,
  InterFont,
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "styles/constants";
import { DetailsBlock } from "../blocks/DetailsBlock";
import { Diamond } from "common/types/diamonds";
import { useLocaleContext } from "common/hooks/localeContext";

export const DiamondDetailsSection: FC<{
  diamond: Diamond;
}> = memo(({ diamond }) => {
  const { t } = useTranslation();
  const { language } = useLocaleContext();
  return (
    <div className="border-t" style={{ borderColor: BorderColor }}>
      <h1
        className={`${TitlesStyles.title} !my-10 max-[639px]:text-center`}
        style={{ color: MainColor, fontFamily: TitleFont }}
      >
        {t("diamondPage.diamondDetailsSection.title")}
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {DiamondDetailsBlocks.map(({ title, details, isWide }, index) => (
          <div
            key={index}
            className={`${isWide ? "lg:col-[2] lg:row-[1/3]" : ""}`}
          >
            <DetailsBlock title={t(title)}>
              <div className="space-y-3 h-fit">
                {details.map(
                  (
                    {
                      title: detailTitle,
                      propertyGroup,
                      propertyKey,
                      editPropertyValue,
                    },
                    index
                  ) => {
                    const value = propertyGroup
                      ? diamond[propertyGroup][propertyKey]
                      : diamond[propertyKey];
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-between space-x-5"
                      >
                        <h2
                          className="font-[400] italic text-[15px] max-[314px]:text-[12px]"
                          style={{
                            color: SubtitleColor,
                            fontFamily: TitleFont,
                          }}
                        >
                          {detailTitle
                            ? detailTitle
                            : t(`diamondProperies.${propertyKey}`)}
                        </h2>
                        <h2
                          className="text-right font-[600] text-[14px] max-[314px]:text-[11px]"
                          style={{
                            color: SubtitleColor,
                            fontFamily: InterFont,
                          }}
                        >
                          {editPropertyValue
                            ? editPropertyValue({ value, locale: language })
                            : value}
                        </h2>
                      </div>
                    );
                  }
                )}
              </div>
            </DetailsBlock>
          </div>
        ))}
      </div>
    </div>
  );
});

DiamondDetailsSection.displayName = "DiamondDetailsSection";
