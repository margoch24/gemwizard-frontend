import {
  FilterBlockTypesEnum,
  Filters,
  NumberRangeValue,
  TextFilters,
} from "common/types/search_diamonds";

export const filtersToQueryParams = ({
  type,
  shape,
  price,
  carat,
  color,
  clarity,
  symmetry,
  polish,
  tablePercentage,
  lengthWidthRatio,
  depthPercentage,
  certLaboratory,
  cutGrade,
  fluorescence,
}: Filters) => {
  const queryParams = {
    type,
    shape,
    price: numbersRangeToString(price),
    carat: numbersRangeToString(carat),
    color: arrayToString(color),
    clarity: arrayToString(clarity),
    symmetry: arrayToString(symmetry),
    polish: arrayToString(polish),
    tablePercentage: numbersRangeToString(tablePercentage),
    lengthWidthRatio: numbersRangeToString(lengthWidthRatio),
    depthPercentage: numbersRangeToString(depthPercentage),
    certLaboratory: arrayToString(certLaboratory),
    cutGrade: arrayToString(cutGrade),
    fluorescence: arrayToString(fluorescence),
  };

  const finalQueryParams = Object.entries(queryParams)
    .filter(([_, value]) => !!value)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  return finalQueryParams;
};

const arrayToString = (array: string[]) => {
  if (!array) {
    return array;
  }
  return array.join(",");
};

const numbersRangeToString = (numbersRange: { min: number; max: number }) => {
  if (!numbersRange) {
    return numbersRange;
  }
  const { min, max } = numbersRange;
  if (!min || !max) {
    return null;
  }
  const rangeArray = [min, max];
  return rangeArray.join(",");
};

export const rewriteFilters = (
  key: string,
  type: string,
  values: any,
  defaultMinValue: number,
  defaultMaxValue: number,
  filters: Filters,
  lastTextFilters: TextFilters
): {
  changedValues?: { minValue: NumberRangeValue; maxValue: NumberRangeValue };
  changedDefaultMinValue?: number;
  changedDefaultMaxValue?: number;
} => {
  const filtersValue =
    type === FilterBlockTypesEnum.TextRange
      ? lastTextFilters[key]
      : filters[key];

  if (!filtersValue) {
    return {};
  }

  const { min, max } = filtersValue;

  if (type === FilterBlockTypesEnum.NumberRange) {
    const { minValue, maxValue } = values;
    const changedValues = {
      minValue: {
        ...minValue,
        ...(minValue?.defaultValue !== min && { defaultValue: min }),
      },
      maxValue: {
        ...maxValue,
        ...(maxValue?.defaultValue !== max && { defaultValue: max }),
      },
    };
    return { changedValues: changedValues };
  }

  if (type === FilterBlockTypesEnum.TextRange) {
    return {
      ...(min !== defaultMinValue && { changedDefaultMinValue: min }),
      ...(max !== defaultMaxValue && { changedDefaultMaxValue: max }),
    };
  }

  return {};
};
