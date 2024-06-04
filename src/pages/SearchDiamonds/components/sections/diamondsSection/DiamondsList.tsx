import { FC, memo, useCallback, useRef } from "react";
import { MainColor, SubtitleColor, TitleFont } from "styles/constants";
import { DIAMONDS_TABLE_TITLES } from "common/constants/index";
import { DiamondsListTitle } from "./DiamondsListTitle";
import { DiamondsListCard } from "./DiamondsListCard";
import { Diamond } from "common/types/diamonds";
import { useDiamondContext } from "common/hooks/diamondsContext";
import { ClipLoader } from "react-spinners";

export const DiamondsList: FC<{
  diamonds: Diamond[];
  loading: boolean;
  hasMore: boolean;
}> = memo(({ diamonds, loading, hasMore }) => {
  const { setLastRecordId } = useDiamondContext();
  const observer = useRef<IntersectionObserver | undefined>();

  const lastDiamondElementRef = useCallback(
    (node: HTMLTableRowElement) => {
      if (loading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        const [diamond] = entries ?? [];
        if (!diamond.isIntersecting) {
          return;
        }

        if (!hasMore) {
          setLastRecordId(null);
          return;
        }

        const lastDiamondId = node.getAttribute("data-diamond-id");
        setLastRecordId(lastDiamondId);
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-5">
        <thead>
          <tr
            className="h-[48px] rounded-[6px] py-[8px] px-[11px] flex flex-row items-center border-b border-[#CFD3D5] justify-between"
            style={{ color: "#F9F9F7", backgroundColor: MainColor }}
          >
            {DIAMONDS_TABLE_TITLES.map((tableTitle, index) => (
              <DiamondsListTitle key={index} tableTitle={tableTitle} />
            ))}
          </tr>
        </thead>
        <tbody>
          {diamonds.length > 0 &&
            diamonds.map((diamond, index) => {
              if (diamonds.length === index + 1) {
                return (
                  <DiamondsListCard
                    diamondRef={lastDiamondElementRef}
                    key={index}
                    diamond={diamond}
                  />
                );
              }

              return <DiamondsListCard key={index} diamond={diamond} />;
            })}
          {!diamonds.length && !loading && (
            <tr>
              <td className="text-center">
                <h2
                  className="font-[400] text-[16px] mt-10"
                  style={{ fontFamily: TitleFont, color: SubtitleColor }}
                >
                  No results were found
                </h2>
              </td>
            </tr>
          )}

          {loading && (
            <tr>
              <td className="text-center">
                <div className="my-10">
                  <ClipLoader size={30} color={MainColor} />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
});

DiamondsList.displayName = "DiamondsList";
