import { FC, memo } from "react";
import ItemNotFoundImage from "../../../../assets/itemNotFound.png";
import { useTranslation } from "react-i18next";
import {
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "styles/constants";
import { Button } from "common/components/wrappers/buttons/Button";
import { useNavigate } from "react-router-dom";

export const DiamondNotFound: FC = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center sm:space-x-6 -mt-[50px]">
      <div
        className="max-w-[500px] h-[600px] max-[500px]:h-[400px] max-[320px]:h-[300px] w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${ItemNotFoundImage})` }}
      ></div>
      <div className="max-w-[700px] max-[639px]:text-center">
        <h1
          className={`${TitlesStyles.title} mb-7`}
          style={{ color: MainColor, fontFamily: TitleFont }}
        >
          {t("diamondPage.diamondNotFound.title")}
        </h1>
        <h2
          className="text-lg mb-10 italic font-[400]"
          style={{ color: SubtitleColor, fontFamily: TitleFont }}
        >
          {t("diamondPage.diamondNotFound.subtitle")}
        </h2>
        <div className="max-[639px]:flex max-[420px]:block justify-center">
          <Button
            limitedWidthMobile={true}
            onClick={() => navigate("/search-diamonds")}
            title={t("routerPathsTitles.searchDiamonds")}
          />
        </div>
      </div>
    </div>
  );
});

DiamondNotFound.displayName = "DiamondNotFound";
