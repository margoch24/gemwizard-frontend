import { FC, memo, useState } from "react";
import { BorderColor, MainColor } from "styles/constants";
import { SwitchButtonOptions } from "../../../../common/types/search_diamonds";

export const SwitchButton: FC<{
  options: SwitchButtonOptions[];
  width?: number;
  onSwitch?: (value: string) => void;
  isFiltersParam?: boolean;
}> = memo(({ options, width = 250, onSwitch, isFiltersParam = true }) => {
  const { title: defaultCheckedTitle } = options.find(
    (option) => option.defaultChecked
  );
  const [checked, setChecked] = useState(defaultCheckedTitle);

  const finalChecked = isFiltersParam ? defaultCheckedTitle : checked;

  const toggleSwitch = (title: string, value: string) => {
    setChecked(title);
    onSwitch?.(value);
  };

  return (
    <div
      style={{ boxShadow: `0 0 0 1px ${BorderColor}`, width }}
      className="flex flex-row items-center text-center p-[3px] rounded-[6px] cursor-pointer max-[639px]:!w-auto"
    >
      {options.map(({ title, value }) => (
        <div
          onClick={() => toggleSwitch(title, value)}
          key={title}
          className="flex-1 p-[4px] rounded-[3px]"
          style={
            finalChecked === title
              ? { backgroundColor: MainColor, color: "#F9F9F7" }
              : {}
          }
        >
          <h1 className="font-[400] text-[14px]">{title}</h1>
        </div>
      ))}
    </div>
  );
});

SwitchButton.displayName = "SwitchButton";
