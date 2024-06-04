import { ErrorMessage } from "common/components/wrappers/ErrorMessage";
import { FC, memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import {
  BorderColor,
  InterFont,
  MainColor,
  SubtitleColor,
  TitleFont,
} from "styles/constants";

export const Input: FC<{
  label?: string;
  placeholder: string;
  height?: number | string;
  textCenter?: boolean;
  onChange?: (value: string | number) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  error?: string;
  value?: string;
  Icon?: IconType;
}> = memo(
  ({
    label,
    placeholder,
    height = 58,
    textCenter,
    onChange,
    onBlur,
    onFocus,
    error,
    value,
    Icon,
  }) => {
    const { t } = useTranslation();
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
      setIsFocused(true);
      onFocus?.();
    };

    const handleBlur = () => {
      setIsFocused(false);
      onBlur?.();
    };

    return (
      <div>
        <div className="flex flex-col space-y-3">
          {label && (
            <span
              className="font-[400] text-sm"
              style={{ color: MainColor, fontFamily: TitleFont }}
            >
              {t(label)}
            </span>
          )}
          <div
            className={`overflow-hidden rounded-[6px] p-[1px] ${
              isFocused ? "border-2" : "border"
            } ${textCenter ? "flex flex-col" : ""} ${
              Icon ? InputWithIconStyles : ""
            }`}
            style={{
              borderColor: isFocused ? "#96AEC3" : BorderColor,
              minHeight: height,
            }}
          >
            {Icon && <Icon size={20} color={SubtitleColor} />}
            <input
              className={`${InputTailwindStyles} placeholder-[#CFD3D5]`}
              style={{ color: MainColor, fontFamily: InterFont }}
              placeholder={t(placeholder)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => onChange(e.target.value)}
              value={value || ""}
            />
          </div>
        </div>
        {error && <ErrorMessage errorMessage={t(error)} />}
      </div>
    );
  }
);

Input.displayName = "Input";

const InputTailwindStyles =
  "flex-1 relative py-[12px] px-[16px] w-full border-none text-left outline-none font-[400] text-sm";

const InputWithIconStyles = "flex flex-row items-center pl-[10px]";
