import { INITIAL_FILTERS } from "../../constants";
import {
  FilterBlockTypesEnum,
  FilterBlockskMockType,
} from "../../types/search_diamonds";

export const FilterBlocks: FilterBlockskMockType[] = [
  {
    key: "shape",
    title: "Shape",
    type: FilterBlockTypesEnum.Select,
    values: [
      {
        title: "Round",
        value: "round",
      },
      {
        title: "Oval",
        value: "oval",
      },
      {
        title: "Cushion",
        value: "cushion",
      },
      {
        title: "Princess",
        value: "princess",
      },
      {
        title: "Pear",
        value: "pear",
      },
      {
        title: "Emerald",
        value: "emerald",
      },
      {
        title: "Radiant",
        value: "radiant",
      },
      {
        title: "Marquise",
        value: "marquise",
      },
      {
        title: "Heart",
        value: "heart",
      },
      {
        title: "Asscher",
        value: "asscher",
      },
    ],
    defaultValue: INITIAL_FILTERS?.shape,
  },
  {
    key: "price",
    title: "Price",
    type: FilterBlockTypesEnum.NumberRange,
    values: {
      minValue: {
        number: 0,
        defaultValue: INITIAL_FILTERS?.price?.min,
        title: "Min Price",
        sign: "$",
      },
      maxValue: {
        number: 100000,
        defaultValue: INITIAL_FILTERS?.price?.max,
        title: "Max Price",
        sign: "$",
      },
    },
  },
  {
    key: "cutGrade",
    title: "Cut",
    type: FilterBlockTypesEnum.TextRange,
    values: ["none", "fair", "good", "very good", "excellent"],
    defaultMinValue: 0,
    defaultMaxValue: 4,
  },
  {
    key: "carat",
    title: "Carat",
    type: FilterBlockTypesEnum.NumberRange,
    values: {
      minValue: {
        number: 0,
        defaultValue: INITIAL_FILTERS?.carat?.min,
        title: "Min Carat",
      },
      maxValue: {
        number: 10,
        defaultValue: INITIAL_FILTERS?.carat?.max,
        title: "Max Carat",
      },
    },
    step: 0.1,
  },
  {
    key: "clarity",
    title: "Clarity",
    type: FilterBlockTypesEnum.TextRange,
    values: ["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"],
    detail: "Flawless",
    defaultMinValue: 0,
    defaultMaxValue: 6,
  },
  {
    key: "color",
    title: "Color",
    type: FilterBlockTypesEnum.TextRange,
    values: ["K", "J", "I", "H", "G", "F", "E", "D"],
    defaultMinValue: 0,
    defaultMaxValue: 6,
    rangeDetails: [
      {
        title: "Near colorless",
        rangesAmount: 4,
      },
      {
        title: "Colorless",
        rangesAmount: 3,
      },
    ],
  },
];
