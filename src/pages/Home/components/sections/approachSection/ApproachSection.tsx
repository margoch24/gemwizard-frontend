import { FC, memo } from "react";
import { Container } from "../../../../../common/components/wrappers/Container";
import {
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "../../../../../styles/constants";
import { ApproachCards } from "../../../../../common/constants/index";
import { ApproachCard } from "./ApproachCard";
import { Carousel } from "../../../../../common/components/wrappers/Carousel";
import { renderCards } from "../../../../../common/helpers/home";

export const ApproachSection: FC = memo(() => {
  return (
    <Container>
      <div className="md:pt-[150px] pt-[50px] text-center">
        <h2 className={TitlesStyles.subtitle} style={{ color: SubtitleColor }}>
          Our approach
        </h2>

        <h1
          className={`${TitlesStyles.title} mb-7`}
          style={{ color: MainColor, fontFamily: TitleFont }}
        >
          Why choose <span className={TitlesStyles.titleSpan}>GemWiz?</span>
        </h1>

        <h2
          className="mb-20 text-lg max-[450px]:text-sm font-[400px] italic"
          style={{ color: SubtitleColor, fontFamily: TitleFont }}
        >
          <span className="font-[500]">GemWiz</span> goal is simple: help you
          find the same <br /> or better diamond, just cheaper
        </h2>

        {ApproachCards.length <= 3 ? (
          <div
            className={`flex min-[1080px]:flex-row flex-col min-[1080px]:justify-between min-[1080px]:space-x-10 
          space-y-10 min-[1080px]:space-y-0`}
          >
            {renderCards(ApproachCards, ApproachCard)}
          </div>
        ) : (
          <Carousel>{renderCards(ApproachCards, ApproachCard)}</Carousel>
        )}
      </div>
    </Container>
  );
});

ApproachSection.displayName = "ApproachSection";
