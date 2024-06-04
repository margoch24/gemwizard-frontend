import { Input } from "common/components/wrappers/Input";
import { FC, memo, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { InterFont, SubtitleColor } from "styles/constants";

export const Search: FC<{
  title?: string;
  description?: string;
  placeholder: string;
}> = memo(({ title, description, placeholder }) => {
  const [value, setValue] = useState<string>(null);
  const [valueError, setValueError] = useState<string>(null);

  const validateValue = () => {
    return true;
  };

  return (
    <div className="space-y-3">
      {title && (
        <h2
          className="uppercase font-[500] text-[12px]"
          style={{ color: SubtitleColor, fontFamily: InterFont }}
        >
          {title}
        </h2>
      )}

      <Input
        Icon={IoIosSearch}
        height={32}
        placeholder={placeholder}
        onFocus={() => {
          setValueError("");
        }}
        onBlur={validateValue}
        onChange={(newValue) => setValue(newValue as string)}
        error={valueError}
        value={value}
      />
      {description && (
        <h2
          style={{ color: SubtitleColor, fontFamily: InterFont }}
          className="font-[400] text-[10px]"
        >
          {description}
        </h2>
      )}
    </div>
  );
});

Search.displayName = "Search";
