import { FC, memo } from "react";
import {
  LightColor,
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "../../../../styles/constants";
import { Button } from "../../../../common/components/wrappers/buttons/Button";
import { ButtonTheme } from "../../../../common/types/components/button";
import DiamondImage from "../../../../assets/diamond.svg";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../../common/components/wrappers/Container";
import { useTranslation } from "react-i18next";

export const LandingSection: FC = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container styles={{ backgroundColor: LightColor }}>
      <div className="md:pt-[250px] pt-[150px] pb-[100px]">
        <div
          className={`mt-[10px] lg:flex lg:flex-row-reverse items-center 
        justify-around lg:justify-between xl:justify-around block`}
        >
          <div className="relative">
            <h2
              className={`${TitlesStyles.subtitle} md:mb-0`}
              style={{ color: SubtitleColor }}
            >
              {t("landingSection.subtitle")}
            </h2>

            <h1
              className={`xl:text-[83px] md:text-[83px] lg:text-[65px] sm:text-[65px] min-[532px]:text-[60px]  
              min-[455px]:text-[50px] text-[40px] max-[365px]:text-[35px] 
              max-[330px]:text-[28px] font-[400] tracking-wider mb-10`}
              style={{ color: MainColor, fontFamily: TitleFont }}
            >
              {t("landingSection.titlePart1")}
              <br />
              {t("landingSection.titlePart2")}{" "}
              <span className="font-[500] italic">
                {t("landingSection.titleBold")}{" "}
              </span>
              {t("landingSection.titlePart3")}
              <br />
              <span className="font-[500] line-through italic">
                {t("landingSection.titleCrossed")}
              </span>
            </h1>

            <div className="lg:block hidden">
              <Button
                limitedWidthMobile={true}
                title={t("landingSection.button")}
                theme={ButtonTheme.Dark}
                onClick={() => navigate("/pricing")}
              />
            </div>
          </div>

          <div
            className={`flex flex-row lg:flex-col items-center h-[260px] sm:space-x-10 
          space-x-5 lg:space-x-0 md:mt-0 -mt-[80px] lg:h-full min-[1023px]:mr-10 min-[1700px]:mr-0`}
          >
            <img
              className="min-[1295px]:w-[300px] md:w-[250px] w-[150px] max-[330px]:w-[100px]"
              src={DiamondImage}
            />
            <h2
              className={`xl:max-w-[320px] max-w-[270px] max-[550px]:w-[235px] max-[450px]:w-[170px] italic font-[400] 
              mt-10 text-lg max-[450px]:text-[12px] lg:mt-10`}
              style={{ color: SubtitleColor, fontFamily: TitleFont }}
            >
              {t("landingSection.description")}
            </h2>
          </div>

          <div className="lg:hidden block md:mt-16">
            <Button
              limitedWidthMobile={true}
              title={t("landingSection.button")}
              theme={ButtonTheme.Dark}
              onClick={() => navigate("/pricing")}
            />
          </div>
        </div>
      </div>
    </Container>
  );
});

LandingSection.displayName = "LandingSection";
