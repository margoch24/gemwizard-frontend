import { FC, memo, useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { BorderColor, MainColor, SubtitleColor } from "styles/constants";
import { RangeDetail } from "common/types/search_diamonds";
import { useDiamondContext } from "common/hooks/diamondsContext";
const coefficient = 20;

export const TextRangeSlider: FC<{
  labels: string[];
  labelsAmountMin?: number;
  defaultMinValue: number;
  defaultMaxValue: number;
  detail?: string;
  rangeDetails?: RangeDetail[];
  filterKey?: string;
  step?: number;
}> = memo(
  ({
    labels,
    labelsAmountMin = 0,
    defaultMinValue,
    defaultMaxValue,
    detail,
    rangeDetails,
    filterKey,
    step = coefficient,
  }) => {
    const [previousValuesLength, setPreviousValuesLength] = useState(0);

    const { filters, setFilters, setLastTextFilters } = useDiamondContext();

    const setValuesByIndexes = (minValue: number, maxValue: number) => {
      return labels.filter(
        (_, index) => index >= minValue && index <= maxValue
      );
    };

    const sliderLabels = labels.slice(0, -1);

    const [values, setValues] = useState(
      setValuesByIndexes(defaultMinValue, defaultMaxValue)
    );

    useEffect(() => {
      setValues(filters[filterKey]);
    }, [filters[filterKey]]);

    const handleSliderInput = ({
      minValue,
      maxValue,
    }: {
      minValue: number;
      maxValue: number;
    }) => {
      const minIndex = Math.round(minValue / coefficient);
      const maxIndex = Math.round(maxValue / coefficient);
      const newValues = setValuesByIndexes(minIndex, maxIndex);
      setValues(newValues);
    };

    const handleSliderChange = ({
      minValue,
      maxValue,
    }: {
      minValue: number;
      maxValue: number;
    }) => {
      if (previousValuesLength === values.length) {
        return;
      }
      setPreviousValuesLength(values.length);

      setFilters((prevFilters) => {
        return {
          ...prevFilters,
          [filterKey]: values,
        };
      });
      const minIndex = Math.round(minValue / coefficient);
      const maxIndex = Math.round(maxValue / coefficient);
      setLastTextFilters((prevLastFilters) => {
        return {
          ...prevLastFilters,
          [filterKey]: {
            min: minIndex,
            max: maxIndex,
          },
        };
      });
    };

    return (
      <div>
        <div className="relative">
          <MultiRangeSlider
            className="mb-3"
            style={{
              border: "none",
              boxShadow: "none",
              padding: 0,
            }}
            ruler={false}
            label={false}
            barInnerColor={MainColor}
            barLeftColor={BorderColor}
            barRightColor={BorderColor}
            min={labelsAmountMin}
            max={sliderLabels.length * coefficient}
            labels={sliderLabels}
            minValue={defaultMinValue * coefficient}
            maxValue={defaultMaxValue * coefficient}
            step={step}
            onInput={handleSliderInput}
            onChange={handleSliderChange}
          />
          <div
            className={defaultThumbTailwind}
            style={{ border: `1px solid ${BorderColor}` }}
          >
            <div
              className="w-[10px] h-[10px] rounded-lg mx-auto mt-[2px]"
              style={{ background: BorderColor }}
            ></div>
          </div>
          <div
            className={`${defaultThumbTailwind} right-0 -mr-[5px]`}
            style={{ border: `1px solid ${BorderColor}` }}
          >
            <div
              className="w-[10px] h-[10px] rounded-lg mx-auto mt-[2px]"
              style={{ background: BorderColor }}
            ></div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between space-x-2 max-[320px]:overflow-x-auto">
          {labels.map((label) => (
            <div key={label}>
              <h2
                className="font-['Roboto+Condensed'] text-[12px] max-[320px]:text-[9px] font-[400] uppercase"
                style={{
                  color: values.includes(label) ? SubtitleColor : BorderColor,
                }}
              >
                {label}
              </h2>
            </div>
          ))}
        </div>

        {detail && (
          <h2
            className="font-[400] text-[12px] mt-5 text-right tracking-wider"
            style={{ color: SubtitleColor }}
          >
            {detail}
          </h2>
        )}

        {rangeDetails && (
          <div className="flex flex-row space-x-2 mt-3">
            {rangeDetails.map(({ title, rangesAmount }) => (
              <div
                className="text-center font-[400] text-[12px] tracking-wider py-[10px] rounded-b-[6px] border-r border-l border-b"
                style={{
                  width: `${(100 / sliderLabels.length) * rangesAmount}%`,
                  color: SubtitleColor,
                  borderColor: MainColor,
                }}
                key={title}
              >
                {title}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

TextRangeSlider.displayName = "TextRangeSlider";

const defaultThumbTailwind =
  "w-[16px] h-[16px] absolute top-0 -mx-[12px] -my-[6px] rounded-lg bg-white";
