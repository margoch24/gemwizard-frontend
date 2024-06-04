import { FC, memo, useEffect, useState } from "react";
import { SubtitleColor, TitleFont } from "styles/constants";

export const TextInput: FC<{
  title: string;
  value: number | string;
  sign?: string;
  onSubmit?: () => void;
  onChange?: (value: number | string) => void;
  onBlur?: (value: number | string) => void;
}> = memo(({ title, value, onChange, sign, onSubmit, onBlur }) => {
  const [width, setWidth] = useState(value.toString().length);

  useEffect(() => {
    setWidth(value.toString().length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit?.();
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBlur?.(e.target.value);
  };

  return (
    <div className={textInputStyles.tailwind} style={textInputStyles.styles}>
      {sign && <h2 className="text-[14px] mr-1">{sign}</h2>}
      <input
        className="outline-none text-[14px] font-[400]"
        style={{ width: width + "ch" }}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSubmit();
          }
        }}
        onBlur={handleOnBlur}
      />
      <div className={textInputLableStyles.div}>
        <h2
          className={textInputLableStyles.h2.tailwind}
          style={textInputLableStyles.h2.styles}
        >
          {title}
        </h2>
      </div>
    </div>
  );
});

TextInput.displayName = "TextInput";

const textInputStyles = {
  styles: {
    border: `1px solid ${SubtitleColor}`,
    fontFamily: TitleFont,
    color: SubtitleColor,
  },
  tailwind:
    "sm:w-[90px] w-[80px] py-[5px] rounded-[6px] relative flex flex-row items-center justify-center",
};

const textInputLableStyles = {
  div: "absolute w-full -top-[10px] left-0 text-center",
  h2: {
    tailwind: "font-[400] text-[12px] w-fit mx-auto bg-white",
    styles: {
      color: SubtitleColor,
    },
  },
};
