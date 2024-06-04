import { FC, memo } from "react";
import { Container } from "../../../../../common/components/wrappers/Container";
import { Button } from "../../../../../common/components/wrappers/buttons/Button";
import { ButtonTheme } from "../../../../../common/types/components/button";
import { useNavigate } from "react-router-dom";
import {
  LightColor,
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "../../../../../styles/constants";
import { StatisticsPicture } from "./StatisticsPicture";
import { useTranslation } from "react-i18next";

export const StatisticsSection: FC = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container styles={{ backgroundColor: LightColor }}>
      <div>
        <h2
          className={`${TitlesStyles.subtitle} md:mb-0 sm:hidden block text-center`}
          style={{ color: SubtitleColor }}
        >
          {t("statisticsSection.subtitle")}
        </h2>
        <h1
          className={`${TitlesStyles.title} !mb-10 sm:hidden block text-center`}
          style={{ color: MainColor, fontFamily: TitleFont }}
        >
          {t("statisticsSection.title")}{" "}
          <span className="font-[600] italic">
            {t("statisticsSection.titleBold")}
          </span>
        </h1>
        <div className="flex xl:flex-row justify-around items-center flex-col-reverse">
          <div className="max-[1279px]:w-full mx-auto xl:mx-0 md:mb-12 mb-0 xl:mb-0 self-baseline xl:self-center">
            <div className="xl:w-[450px] xl:mt-0 mt-10">
              <h2
                className={`${TitlesStyles.subtitle} md:mb-0 sm:block hidden`}
                style={{ color: SubtitleColor }}
              >
                {t("statisticsSection.subtitle")}
              </h2>
              <h1
                className={`${TitlesStyles.title} !mb-10 sm:block hidden`}
                style={{ color: MainColor, fontFamily: TitleFont }}
              >
                {t("statisticsSection.title")}{" "}
                <span className="font-[600] italic">
                  {t("statisticsSection.titleBold")}
                </span>
              </h1>
              <h2
                className="text-lg mb-5 italic font-[400]"
                style={{ color: SubtitleColor, fontFamily: TitleFont }}
              >
                {t("statisticsSection.description")}
              </h2>
              <h2
                className="text-sm mb-10 italic font-[500]"
                style={{ color: SubtitleColor, fontFamily: TitleFont }}
              >
                {t("statisticsSection.secondDescription")}
              </h2>
              <Button
                limitedWidthScreen={true}
                title={t("statisticsSection.buton")}
                theme={ButtonTheme.Dark}
                onClick={() => navigate("/pricing")}
              />
            </div>
          </div>

          <StatisticsPicture />
        </div>
      </div>
    </Container>
  );
});

StatisticsSection.displayName = "StatisticsSection";
