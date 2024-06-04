import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import ErrorPageImage from "../../../assets/errorPageImage.png";
import {
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "styles/constants";

export const Error404: FC = memo(() => {
  const { t } = useTranslation();
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center sm:space-x-6">
      <img src={ErrorPageImage} />
      <div className="max-w-[700px] max-[639px]:text-center">
        <h1
          className={`${TitlesStyles.title} mb-7`}
          style={{ color: MainColor, fontFamily: TitleFont }}
        >
          {t("errorsPages.404.title")}
        </h1>
        <h2
          className="text-lg mb-7 italic font-[400]"
          style={{ color: SubtitleColor, fontFamily: TitleFont }}
        >
          {t("errorsPages.404.subtitle")}
        </h2>
        <h2
          className="text-sm font-[400]"
          style={{ color: SubtitleColor, fontFamily: TitleFont }}
        >
          {t("errorsPages.404.description")}{" "}
          <span className="italic font-[600]">
            {t("errorsPages.404.spanDescription")}
          </span>
        </h2>
      </div>
    </div>
  );
});

Error404.displayName = "Error404";
