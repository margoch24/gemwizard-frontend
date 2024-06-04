import { FC, memo } from "react";
import { MainColor, SubtitleColor, TitleFont } from "styles/constants";
import { Diamond } from "common/types/diamonds";
import { ClipLoader } from "react-spinners";
import { DiamondsGridCard } from "./DiamondsGridCard";

export const DiamondsGrid: FC<{
  diamonds: Diamond[];
  loading: boolean;
  hasMore: boolean;
}> = memo(({ diamonds, loading, hasMore }) => {
  return (
    <div className="flex flex-wrap mt-5 justify-center lg:gap-6 gap-3 px-3">
      {diamonds.length > 0 &&
        diamonds.map((diamond, index) => (
          <DiamondsGridCard key={index} diamond={diamond} />
        ))}
      {!diamonds.length && !loading && (
        <div className="text-center">
          <h2
            className="font-[400] text-[16px] mt-10"
            style={{ fontFamily: TitleFont, color: SubtitleColor }}
          >
            No results were found
          </h2>
        </div>
      )}

      {loading && (
        <div className="text-center">
          <div className="my-10">
            <ClipLoader size={30} color={MainColor} />
          </div>
        </div>
      )}
    </div>
  );
});

DiamondsGrid.displayName = "DiamondsGrid";
