import { FC, memo, useEffect, useState } from "react";
import { NumberRangeValue } from "common/types/search_diamonds";
import { TextInput } from "../inputs/TextInput";
import MultiRangeSlider from "multi-range-slider-react";
import { BorderColor, MainColor } from "styles/constants";
import { useDiamondContext } from "common/hooks/diamondsContext";

export const NumbersRangeSlider: FC<{
  minValue: NumberRangeValue;
  maxValue: NumberRangeValue;
  filterKey: string;
  step?: number;
}> = memo(({ minValue, maxValue, filterKey, step = 1 }) => {
  const { filters, setFilters } = useDiamondContext();
  const [lastValidMinValue, setLastValidMinValue] = useState(
    minValue.defaultValue
  );
  const [lastValidMaxValue, setLastValidMaxValue] = useState(
    maxValue.defaultValue
  );
  const [currentMinValue, setCurrentMinValue] = useState(minValue.defaultValue);
  const [currentMaxValue, setCurrentMaxValue] = useState(maxValue.defaultValue);

  useEffect(() => {
    const { min, max } = filters[filterKey] ?? {};
    setCurrentMinValue(min);
    setCurrentMaxValue(max);
  }, [filters[filterKey]]);

  const validateValue = (number: number) => {
    if (number < 0) {
      return 0;
    }
    if (number?.toString()?.length > 6) {
      return number?.toFixed(6);
    }
    return number;
  };

  const handleInputChange = (
    value: string | number,
    setValue: (value: number) => void,
    type?: string
  ) => {
    const numberValue = Number(value);
    if (!numberValue && numberValue !== 0) {
      return;
    }

    if (type === "min" && numberValue <= currentMaxValue) {
      setLastValidMinValue(numberValue);
    }

    if (type === "max" && numberValue >= currentMinValue) {
      setLastValidMaxValue(numberValue);
    }

    setValue(numberValue);
  };

  const handleSliderChange = () => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [filterKey]: { min: currentMinValue, max: currentMaxValue },
      };
    });
  };

  const handleSliderInput = ({
    minValue,
    maxValue,
  }: {
    minValue: number;
    maxValue: number;
  }) => {
    if (currentMinValue <= currentMaxValue) {
      setCurrentMinValue(minValue);
    }

    if (currentMaxValue >= currentMinValue) {
      setCurrentMaxValue(maxValue);
    }
  };

  return (
    <div>
      <div className="relative">
        <MultiRangeSlider
          className="mb-8"
          style={{
            border: "none",
            boxShadow: "none",
            padding: 0,
          }}
          label={false}
          ruler={false}
          barInnerColor={MainColor}
          barLeftColor={BorderColor}
          barRightColor={BorderColor}
          min={minValue.number}
          max={maxValue.number}
          minValue={
            currentMinValue > currentMaxValue
              ? lastValidMinValue
              : currentMinValue
          }
          maxValue={
            currentMaxValue < currentMinValue
              ? lastValidMaxValue
              : currentMaxValue
          }
          onInput={handleSliderInput}
          onChange={handleSliderChange}
          step={step}
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

      <div className="flex flex-row justify-between items-center space-x-2">
        <TextInput
          title={minValue.title}
          value={validateValue(currentMinValue)}
          onChange={(value) =>
            handleInputChange(value, setCurrentMinValue, "min")
          }
          sign={minValue.sign}
        />
        <TextInput
          title={maxValue.title}
          value={validateValue(currentMaxValue)}
          onChange={(value) =>
            handleInputChange(value, setCurrentMaxValue, "max")
          }
          sign={maxValue.sign}
        />
      </div>
    </div>
  );
});

NumbersRangeSlider.displayName = "NumbersRangeSlider";

const defaultThumbTailwind =
  "w-[16px] h-[16px] absolute top-0 -mx-[12px] -my-[6px] rounded-lg bg-white";
