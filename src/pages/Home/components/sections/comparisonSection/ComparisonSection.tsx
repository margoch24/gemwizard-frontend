import { FC, memo } from "react";
import { Container } from "../../../../../common/components/wrappers/Container";
import {
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "../../../../../styles/constants";
import ComparisonDiamond from "../../../../../assets/comparisonDiamond.png";
import { ComparisonTable } from "./ComparisonTable";
import { ComparisonMobileTable } from "./ComparisonMobileTable";
import { useTranslation } from "react-i18next";

export const ComparisonSection: FC = memo(() => {
  const { t } = useTranslation();
  return (
    <Container tailwindStyles="bg-white">
      <div className="text-center md:pt-[150px] pt-[50px]">
        <h2 className={TitlesStyles.subtitle} style={{ color: SubtitleColor }}>
          {t("comparisonSection.subtitle")}
        </h2>

        <h1
          className={`${TitlesStyles.title} mb-3`}
          style={{ color: MainColor, fontFamily: TitleFont }}
        >
          {t("comparisonSection.title")}{" "}
          <span className={TitlesStyles.titleSpan}>
            {t("comparisonSection.titleBold")}
          </span>
        </h1>
        <div
          className={`min-[440px]:h-[250px] min-[370px]:h-[200px] h-[150px] 
          max-[540px]:bg-cover min-[550px]:w-[500px] mx-auto opacity-40 
          -scale-x-[1] bg-no-repeat bg-[length:500px_400px]`}
          style={{
            backgroundImage: `url(${ComparisonDiamond})`,
          }}
        ></div>

        <ComparisonTable />
        <ComparisonMobileTable />
      </div>
    </Container>
  );
});

ComparisonSection.displayName = "ComparisonSection";
