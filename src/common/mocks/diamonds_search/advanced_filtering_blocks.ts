import { INITIAL_FILTERS } from "../../constants";
import {
  FilterBlockTypesEnum,
  FilterBlockskMockType,
} from "../../types/search_diamonds";

export const AdvancedFilterBlocks: FilterBlockskMockType[] = [
  {
    key: "fluorescence",
    title: "Fluorescence",
    type: FilterBlockTypesEnum.SelectWithToggleButtons,
    values: [
      {
        title: "none",
        value: "none",
      },
      {
        title: "negligible",
        value: "negligible",
      },
      {
        title: "faint",
        value: "faint",
      },
      {
        title: "medium",
        value: "medium",
      },
      {
        title: "strong",
        value: "strong",
      },
      {
        title: "very strong",
        value: "very strong",
      },
    ],
  },
  {
    key: "depthPercentage",
    title: "Depth %",
    type: FilterBlockTypesEnum.NumberRange,
    values: {
      minValue: {
        number: 0,
        defaultValue: INITIAL_FILTERS?.depthPercentage?.min,
        title: "Min",
        sign: "%",
      },
      maxValue: {
        number: 100,
        defaultValue: INITIAL_FILTERS?.depthPercentage?.max,
        title: "Max",
        sign: "%",
      },
    },
  },
  {
    key: "tablePercentage",
    title: "Table %",
    type: FilterBlockTypesEnum.NumberRange,
    values: {
      minValue: {
        number: 0,
        defaultValue: INITIAL_FILTERS?.tablePercentage?.min,
        title: "Min",
        sign: "%",
      },
      maxValue: {
        number: 100,
        defaultValue: INITIAL_FILTERS?.tablePercentage?.max,
        title: "Max",
        sign: "%",
      },
    },
  },
];
