import { FC, memo } from "react";
import {
  BorderColor,
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "styles/constants";

export const HeadingSection: FC = memo(() => {
  return (
    <div className="text-center">
      <h1
        className={`${TitlesStyles.title} mb-7`}
        style={{ fontFamily: TitleFont, color: MainColor }}
      >
        Find the perfect diamond ring
      </h1>
      <h2
        className="text-[16px] font-[400] mb-6"
        style={{ fontFamily: TitleFont, color: SubtitleColor }}
      >
        Find the perfect diamond from our curated list of diamonds.
      </h2>

      <hr className="sm:block hidden" style={{ color: BorderColor }} />
    </div>
  );
});

HeadingSection.displayName = "HeadingSection";
