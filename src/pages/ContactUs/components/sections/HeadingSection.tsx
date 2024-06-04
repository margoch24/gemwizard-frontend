import { FC, memo } from "react";
import {
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "../../../../styles/constants";
import { useTranslation } from "react-i18next";

export const HeadingSection: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 md:text-left text-center">
      <h1
        className={`${TitlesStyles.title} max-[764px]:mb-5`}
        style={{ color: MainColor, fontFamily: TitleFont }}
      >
        {t("inquiryForm.titles.title")}
      </h1>
      <h2
        className={`max-w-[400px] italic font-[400] text-lg max-[450px]:text-[12px]`}
        style={{ color: SubtitleColor, fontFamily: TitleFont }}
      >
        {t("inquiryForm.titles.subtitle")}
      </h2>
    </div>
  );
});

HeadingSection.displayName = "HeadingSection";
