import { rewriteFilters } from "common/helpers/searchDiamonds";
import {
  FilterBlockProps,
  FilterBlockTypesEnum,
  Filters,
  RangeDetail,
  TextFilters,
} from "common/types/search_diamonds";
import { FC } from "react";
import { SimpleSelect } from "../filterBlockComponents/selectLists/SimpleSelect";
import { NumbersRangeSlider } from "../filterBlockComponents/sliders/NumbersRangeSlider";
import { TextRangeSlider } from "../filterBlockComponents/sliders/TextRangeSlider";
import { SelectWithToggleButtons } from "../filterBlockComponents/selectLists/SelectWithToggleButtons";

export const Block: FC<{
  key: string;
  type: string;
  values: any;
  detail: string;
  rangeDetails: RangeDetail[];
  defaultMinValue: number;
  defaultMaxValue: number;
  filterKey?: string;
  filters?: Filters;
  lastTextFilters?: TextFilters;
  step?: number;
}> = ({
  type,
  values,
  detail,
  rangeDetails,
  defaultMinValue,
  defaultMaxValue,
  filterKey,
  filters,
  lastTextFilters,
  step,
}) => {
  const Component = FilterBlockTypeToComponentMap[type];

  if (!Component) {
    return null;
  }

  const { changedValues, changedDefaultMinValue, changedDefaultMaxValue } =
    rewriteFilters(
      filterKey,
      type,
      values,
      defaultMinValue,
      defaultMaxValue,
      filters,
      lastTextFilters
    );

  return (
    <Component
      options={values}
      minValue={(changedValues || values)?.minValue}
      maxValue={(changedValues || values)?.maxValue}
      defaultMinValue={changedDefaultMinValue || defaultMinValue}
      defaultMaxValue={changedDefaultMaxValue || defaultMaxValue}
      labels={values}
      rangeDetails={rangeDetails}
      detail={detail}
      filterKey={filterKey}
      step={step}
    />
  );
};

Block.displayName = "Block";

const FilterBlockTypeToComponentMap: {
  [key in string]: FC<FilterBlockProps>;
} = {
  [FilterBlockTypesEnum.Select]: SimpleSelect,
  [FilterBlockTypesEnum.NumberRange]: NumbersRangeSlider,
  [FilterBlockTypesEnum.TextRange]: TextRangeSlider,
  [FilterBlockTypesEnum.SelectWithToggleButtons]: SelectWithToggleButtons,
};
