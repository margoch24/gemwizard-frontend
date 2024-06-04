import { IconType } from "react-icons";

export type SwitchButtonOptions = {
  title: string;
  value: string;
  defaultChecked?: boolean;
};

export enum FilterBlockThemesEnum {
  Light = "light",
  Dark = "dark",
}

export enum ToggleBlockThemesEnum {
  Light = "light",
  White = "white",
  Transparent = "transparent",
}

export enum ToggleButtonCheckedThemesEnum {
  Light = "light",
  Dark = "dark",
}

export enum FilterBlockTypesEnum {
  Select = "select",
  NumberRange = "number_range",
  TextRange = "text_range",
  Search = "search",
  ToggleBlock = "toggle_button",
  SelectWithToggleButtons = "select_with_toggle_buttons",
}

export type NumberRangeValue = {
  number: number;
  defaultValue: number;
  title: string;
  sign?: string;
};

export type RangeDetail = {
  title: string;
  rangesAmount: number;
};

export type FilterBlockProps = {
  minValue?: NumberRangeValue;
  maxValue?: NumberRangeValue;
  defaultMinValue?: number;
  defaultMaxValue?: number;
  labels?: string[];
  rangeDetails?: RangeDetail[];
  detail?: string;
  filterKey?: string;
  options?: SelectValue[];
  allValuesNone?: boolean;
  step?: number;
};

export type FilterBlockskMockType = {
  key: string;
  title: string;
  type: string;
  values:
    | string[]
    | { minValue: NumberRangeValue; maxValue: NumberRangeValue }
    | {
        title: string;
        value: string;
      }[];
  detail?: string;
  rangeDetails?: RangeDetail[];
  defaultMinValue?: number;
  defaultMaxValue?: number;
  defaultValue?: string;
  step?: number;
};

export type Filters = {
  type?: string;
  shape?: string;
  price?: {
    min: number;
    max: number;
  };
  carat?: {
    min: number;
    max: number;
  };
  color?: string[];
  clarity?: string[];
  symmetry?: string[];
  polish?: string[];
  cutGrade?: string[];
  fluorescence?: string[];
  tablePercentage?: {
    min: number;
    max: number;
  };
  lengthWidthRatio?: {
    min: number;
    max: number;
  };
  depthPercentage?: {
    min: number;
    max: number;
  };
  certLaboratory?: string[];
};

export type TextFilters = {
  color?: {
    min?: number;
    max?: number;
  };
  clarity?: {
    min?: number;
    max?: number;
  };
  symmetry?: {
    min?: number;
    max?: number;
  };
  polish?: {
    min?: number;
    max?: number;
  };
  certLaboratory?: {
    min?: number;
    max?: number;
  };
};

export enum ViewTypeEnum {
  List = "list",
  Grid = "grid",
}

export type SelectValue = {
  title: string;
  value: string;
  Icon?: IconType;
  image?: string;
};
