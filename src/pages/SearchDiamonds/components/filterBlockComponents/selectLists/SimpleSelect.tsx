import { useDiamondContext } from "common/hooks/diamondsContext";
import { FC, memo, useEffect, useState } from "react";
import { MainColor, SubtitleColor } from "styles/constants";
import { SelectValue } from "common/types/search_diamonds";

export const SimpleSelect: FC<{
  filterKey: string;
  options: SelectValue[];
}> = memo(({ filterKey, options }) => {
  const { filters, setFilters } = useDiamondContext();
  const [selectedValue, setSeletectedValue] = useState(filters[filterKey]);

  useEffect(() => {
    setSeletectedValue(filters[filterKey]);
  }, [filters[filterKey]]);

  const handleClick = (value: string) => {
    setSeletectedValue(value);
    setFilters((prevFilters) => {
      return { ...prevFilters, shape: value };
    });
  };

  return (
    <div className="flex flex-wrap min-[1350px]:justify-center gap-x-5 gap-y-5">
      {options.map(({ title, value, Icon, image }, index) => {
        const isSelected = selectedValue === value;
        return (
          <div
            key={index}
            className={`${
              isSelected ? "flex" : "block"
            } flex-col justify-center items-center w-[40px]`}
          >
            <div
              onClick={() => handleClick(value)}
              className={`w-[30px] h-[30px] border rounded-[4px] ${
                !isSelected && "cursor-pointer"
              }`}
              style={{
                borderColor: `${isSelected ? MainColor : "#CFD3D5"}`,
              }}
            ></div>
            {isSelected && (
              <h2
                className="font-['Roboto+Condensed'] text-[12px] font-[400] uppercase"
                style={{
                  color: SubtitleColor,
                }}
              >
                {title}
              </h2>
            )}
          </div>
        );
      })}
    </div>
  );
});

SimpleSelect.displayName = "SimpleSelect";
