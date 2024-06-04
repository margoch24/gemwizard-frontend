import { useDiamondContext } from "common/hooks/diamondsContext";
import { FC, memo, useEffect, useState } from "react";
import { SubtitleColor } from "styles/constants";
import { SelectValue } from "common/types/search_diamonds";
import { ToggleButton } from "../../../../../common/components/wrappers/buttons/ToggleButton";

export const SelectWithToggleButtons: FC<{
  filterKey: string;
  options: SelectValue[];
}> = memo(({ filterKey, options }) => {
  const { filters, setFilters } = useDiamondContext();
  const [values, setValues] = useState<string[]>(filters[filterKey]);

  useEffect(() => {
    setValues(filters[filterKey]);
  }, [filters[filterKey]]);

  useEffect(() => {
    setFilters((prevFilters) => {
      return { ...prevFilters, [filterKey]: values };
    });
  }, [values]);

  const handleClick = (value: string, isSelected: boolean) => {
    if (!isSelected) {
      setValues((prevValues) => {
        const newValues = prevValues.filter((prevValue) => prevValue !== value);
        return newValues;
      });
      return;
    }

    if (values.includes(value)) {
      return;
    }

    setValues((prevValues) => {
      return [...prevValues, value];
    });
  };

  return (
    <div className="flex flex-col space-y-3">
      {options.map(({ title, value }, index) => {
        const isSelected = values.includes(value);

        return (
          <div
            className="flex flex-row items-center space-x-10 lg:justify-between xl:justify-normal max-[400px]:justify-between"
            key={index}
          >
            <h2
              className="font-['Roboto+Condensed'] text-[12px] font-[400] uppercase xl:flex-1 max-[1024px]:flex-1 max-[400px]:flex-initial"
              style={{
                color: SubtitleColor,
              }}
            >
              {title}
            </h2>
            <div className="xl:flex-1 max-[1024px]:flex-1 max-[400px]:flex-initial">
              <ToggleButton
                onClick={() => {
                  handleClick(value, !isSelected);
                }}
                checked={isSelected}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
});

SelectWithToggleButtons.displayName = "SelectWithToggleButtons";
