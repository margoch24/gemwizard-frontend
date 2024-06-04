import { FC, memo, useEffect, useState } from "react";
import { StyledButton } from "../buttons/StyledButton";
import { GrPowerReset } from "react-icons/gr";
import { BsShare } from "react-icons/bs";
import { SwitchButton } from "../buttons/SwitchButton";
import { FilterBlocks } from "common/mocks/diamonds_search/filtering_blocks";
import { FilterBlock } from "../filterBlocks/FilterBlock";
import { FilterBlockThemesEnum } from "common/types/search_diamonds";
import { useDiamondContext } from "common/hooks/diamondsContext";
import { DiamondType, DiamondTypeToTitle } from "common/types/diamonds";
import { INITIAL_FILTERS } from "common/constants/index";
import { Block } from "../filterBlocks/Block";
import { useTranslation } from "react-i18next";

export const FiltersSection: FC = memo(() => {
  const { t } = useTranslation();
  const {
    setFilters,
    filters,
    lastTextFilters,
    setLastRecordId,
    setLastTextFilters,
    lastRecordId,
  } = useDiamondContext();

  const [diamondsType, setDiamondsType] = useState(filters?.type);

  const onSwitch = (checked: string) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, type: checked };
    });
  };

  const onReset = () => {
    if (
      !lastRecordId &&
      filters === INITIAL_FILTERS &&
      !Object.keys(lastTextFilters).length
    ) {
      setLastRecordId(null);
    }

    setFilters(INITIAL_FILTERS);
    setLastTextFilters({});
  };

  useEffect(() => {
    setDiamondsType(filters?.type);
  }, [filters?.type]);

  return (
    <div className="sm:mt-5 mt-7">
      <div className="flex sm:flex-row flex-col sm:items-center justify-between">
        <SwitchButton
          onSwitch={onSwitch}
          options={[
            {
              title: t(DiamondTypeToTitle[DiamondType.LabGrown]),
              value: DiamondType.LabGrown,
              defaultChecked: diamondsType === DiamondType.LabGrown,
            },
            {
              title: t(DiamondTypeToTitle[DiamondType.NaturalDiamond]),
              value: DiamondType.NaturalDiamond,
              defaultChecked: diamondsType === DiamondType.NaturalDiamond,
            },
          ]}
        />
        <div className="flex flex-row items-center space-x-1 sm:mt-0 mt-5">
          <StyledButton onClick={onReset} title="Reset" Icon={GrPowerReset} />
          <StyledButton title="Share" Icon={BsShare} />
        </div>
      </div>

      <div className="mt-7 grid md:grid-cols-2 grid-cols-1 gap-5 sm:space-y-0 space-y-5">
        {FilterBlocks.map(
          ({
            key,
            title,
            type,
            values,
            detail,
            rangeDetails,
            defaultMinValue,
            defaultMaxValue,
            step,
          }) => (
            <FilterBlock
              key={key}
              title={title}
              theme={FilterBlockThemesEnum.Dark}
            >
              <Block
                key={key}
                filterKey={key}
                type={type}
                values={values}
                detail={detail}
                rangeDetails={rangeDetails}
                defaultMinValue={defaultMinValue}
                defaultMaxValue={defaultMaxValue}
                filters={filters}
                lastTextFilters={lastTextFilters}
                step={step}
              />
            </FilterBlock>
          )
        )}
      </div>
    </div>
  );
});

FiltersSection.displayName = "FiltersSection";
