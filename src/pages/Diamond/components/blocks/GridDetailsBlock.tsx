import { SimpleLink } from "common/components/wrappers/SimpleLink";
import { Detail, Diamond } from "common/types/diamonds";
import { FC, ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import {
  BorderColor,
  InterFont,
  MainColor,
  SubtitleColor,
  TitleFont,
} from "styles/constants";

export const GridDetailsBlock: FC<{
  details: Detail[];
  diamond: Diamond;
}> = memo(({ details, diamond }) => {
  const { t } = useTranslation();
  return (
    <div
      className="rounded-[6px] border sm:px-[30px] py-[12px] px-[12px] overflow-x-auto"
      style={{ borderColor: BorderColor }}
    >
      <div
        className="grid grid-cols-4 gap-y-5 gap-x-3 sm:gap-x-5 min-w-max"
        style={{ gridTemplateColumns: "repeat(3, 1fr) 0.5fr" }}
      >
        {details.map(
          (
            { title, propertyKey, propertyGroup, useUrl, editPropertyValue },
            index
          ) => {
            const value: string | number = propertyGroup
              ? diamond[propertyGroup][propertyKey]
              : diamond[propertyKey];

            const isValueLarge = value?.toString()?.length >= 20;
            const translatedTitle = title
              ? title
              : t(`diamondProperies.${propertyKey}`);
            const isTitleLarge = translatedTitle.length >= 19;

            return (
              <div
                key={index}
                className={`${
                  useUrl || isValueLarge || isTitleLarge ? "col-[1/5]" : ""
                }`}
              >
                {useUrl ? (
                  <div
                    className="max-[639px]:text-center max-[400px]:text-left"
                    key={index}
                  >
                    {value && (
                      <SimpleLink
                        titleStyles={{ color: MainColor }}
                        titleTailwindStyles="font-[400] text-[12px] underline"
                        targetBlank={true}
                        path={value?.toString()}
                        title={t(title)}
                      />
                    )}
                  </div>
                ) : (
                  <div
                    className="w-max flex flex-col sm:items-center space-y-1 max-w-[480px]"
                    key={index}
                  >
                    <h2
                      className={`italic text-[14px] font-[400] ${
                        isValueLarge ? "self-baseline" : ""
                      }`}
                      style={{ fontFamily: TitleFont, color: SubtitleColor }}
                    >
                      {translatedTitle}
                    </h2>
                    <h2
                      className="font-[600] text-[14px]"
                      style={{ fontFamily: InterFont, color: SubtitleColor }}
                    >
                      {editPropertyValue
                        ? editPropertyValue({ value, diamond })
                        : value}
                    </h2>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
});

GridDetailsBlock.displayName = "GridDetailsBlock";
