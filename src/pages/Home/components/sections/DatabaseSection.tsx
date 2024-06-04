import { FC, memo } from "react";
import { Container } from "../../../../common/components/wrappers/Container";
import { Button } from "../../../../common/components/wrappers/buttons/Button";
import { ButtonTheme } from "../../../../common/types/components/button";
import { useNavigate } from "react-router-dom";
import {
  BorderColor,
  LightColor,
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "../../../../styles/constants";
import DatabaseImage from "../../../../assets/database.png";

export const DatabaseSection: FC = memo(() => {
  const navigate = useNavigate();
  return (
    <Container styles={{ backgroundColor: LightColor }}>
      <div
        className="sm:pt-[100px] pt-[50px] md:pb-0 pb-[100px] xl:rounded-[90px] rounded-[50px] relative"
        style={{
          borderTop: `1px solid ${BorderColor}`,
        }}
      >
        <h2
          className={`${TitlesStyles.subtitle} sm:hidden block text-center !mb-10`}
          style={{ color: SubtitleColor }}
        >
          Our database
        </h2>
        <div
          className={`flex xl:flex-row sm:flex-col flex-col-reverse justify-around xl:items-center 
        items-baseline sm:w-[95%] sm:ml-auto xl:w-auto xl:ml-0`}
        >
          <div className="xl:mb-0 mb-10 w-full xl:w-auto">
            <h2
              className={`${TitlesStyles.subtitle} md:mb-0 sm:block hidden absolute -rotate-90 -left-[5rem] xl:top-[13rem] top-[9rem]`}
              style={{ color: SubtitleColor }}
            >
              Our database
            </h2>
            <div
              className="xl:w-[550px] xl:h-[550px] h-[600px] rounded-xl bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${DatabaseImage})` }}
            ></div>
          </div>

          <div className="xl:w-[450px] w-full h-[80%] mx-auto xl:mx-0">
            <h1
              className={`${TitlesStyles.title} !mb-10 max-[1279px]:max-w-[80%] max-[639px]:mx-auto max-[639px]:text-center`}
              style={{ color: MainColor, fontFamily: TitleFont }}
            >
              Find <span className="font-[600] italic">the perfect </span>
              <br className="xl:block hidden" />
              <span className="font-[600] italic">stone</span> from our
              <br className="xl:block hidden" />
              <span className="font-[600] italic"> curated list</span> of{" "}
              <br className="xl:block hidden" />
              diamonds
            </h1>
            <div className="sm:block hidden">
              <Button
                limitedWidthScreen={true}
                title="Search on the Database"
                theme={ButtonTheme.Transparent}
                onClick={() => navigate("/search-diamonds")}
              />
            </div>
          </div>
        </div>
        <div className="sm:hidden block">
          <Button
            limitedWidthScreen={true}
            title="Search on the Database"
            theme={ButtonTheme.Transparent}
            onClick={() => navigate("/search-diamonds")}
          />
        </div>
      </div>
    </Container>
  );
});

DatabaseSection.displayName = "DatabaseSection";
