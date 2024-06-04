import {
  FilterBlockThemesEnum,
  ToggleBlockThemesEnum,
} from "common/types/search_diamonds";
import { FC, memo } from "react";
import { FilterBlock } from "../../filterBlocks/FilterBlock";
import { Search } from "../../filterBlockComponents/Search";
import { ToggleBlock } from "../../../../../common/components/wrappers/blocks/ToggleBlock";
import { AdvancedFilterBlocks } from "common/mocks/diamonds_search/advanced_filtering_blocks";
import { InterFont, SubtitleColor } from "styles/constants";
import { Block } from "../../filterBlocks/Block";
import { useDiamondContext } from "common/hooks/diamondsContext";

export const AdvancedFiltersMobile: FC<{
  totalDiamondsCount: number;
}> = memo(({ totalDiamondsCount = 0 }) => {
  const { filters, lastTextFilters } = useDiamondContext();
  return (
    <div className="lg:hidden block mb-7">
      <FilterBlock title="SKU Search" theme={FilterBlockThemesEnum.Light}>
        <div className="space-y-10">
          <Search
            title={`${totalDiamondsCount
              .toLocaleString()
              .replace(",", ".")} Diamonds`}
            description="Make a search using a diamond sku or certification number."
            placeholder="SKU SEARCH"
          />

          <ToggleBlock
            title="Colored Diamonds"
            theme={ToggleBlockThemesEnum.White}
          />

          {AdvancedFilterBlocks.map(
            ({
              key,
              title,
              type,
              values,
              detail,
              rangeDetails,
              defaultMinValue,
              defaultMaxValue,
              step,
            }) => {
              return (
                <div key={key}>
                  <h2
                    className="font-[500] text-[12px] uppercase mb-4"
                    style={{ color: SubtitleColor, fontFamily: InterFont }}
                  >
                    {title}
                  </h2>
                  <Block
                    key={key}
                    filterKey={key}
                    type={type}
                    values={values}
                    detail={detail}
                    rangeDetails={rangeDetails}
                    defaultMinValue={defaultMinValue}
                    defaultMaxValue={defaultMaxValue}
                    filters={filters}
                    lastTextFilters={lastTextFilters}
                    step={step}
                  />
                </div>
              );
            }
          )}
        </div>
      </FilterBlock>
    </div>
  );
});

AdvancedFiltersMobile.displayName = "AdvancedFiltersMobile";
