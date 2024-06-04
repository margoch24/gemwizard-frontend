import { Diamond, Measurements } from "common/types/diamonds";

export const editDate = ({
  value,
  locale,
}: {
  value: string;
  locale: string;
}) => {
  const date = new Date(value).toLocaleDateString(locale);
  return date;
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const editDiamondMeasurements = ({ value }: { value: Measurements }) => {
  const { length, width, depth, unit } = value;
  return `${length}-${width} x ${depth} ${unit}`;
};

export const editAngle = ({ value }: { value: number }) => {
  return `${value | 0}°`;
};

export const editPercentage = ({ value }: { value: number }) => {
  return `${(value * 100) | 0} %`;
};

export const editStringValue = ({ value }: { value: string }) => {
  return value ? capitalizeFirstLetter(value) : "None";
};

export const editNumberValue = ({ value }: { value: number }) => {
  return value || 0;
};

export const editArray = ({ value: values }: { value: [string] }) => {
  const capitalizedValuesArray = values.map((value) =>
    capitalizeFirstLetter(value)
  );
  return capitalizedValuesArray.length > 0
    ? capitalizedValuesArray.join(", ")
    : "None";
};

export const addCurrency = ({
  value,
  diamond,
}: {
  value: number | string;
  diamond: Diamond;
}) => {
  const { priceProperties } = diamond ?? {};
  return `${priceProperties?.currency || ""} ${value}`;
};

export const addCarat = ({ value }: { value: string | number }) => {
  return `${value} ct`;
};
