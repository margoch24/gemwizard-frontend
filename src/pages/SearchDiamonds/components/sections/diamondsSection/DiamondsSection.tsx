import { FC, memo, useCallback, useState } from "react";
import { SwitchButton } from "../../buttons/SwitchButton";
import { SubtitleColor, TitleFont } from "styles/constants";
import { DiamondsList } from "./DiamondsList";
import { ViewTypeEnum } from "common/types/search_diamonds";
import { useDiamondContext } from "common/hooks/diamondsContext";
import { Diamond, DiamondTypeToTitle } from "common/types/diamonds";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ResponseData } from "common/types/api";
import { QueryKeys } from "common/constants/api";
import { DIAMONDS_LIMIT } from "common/constants/index";
import { getDiamonds } from "api/requests/diamonds/getDiamonds";
import { debounce } from "common/helpers/debounce";
import { filtersToQueryParams } from "common/helpers/searchDiamonds";
import { DiamondsGrid } from "./DiamondsGrid";
import { useTranslation } from "react-i18next";

export const DiamondsSection: FC = memo(() => {
  const { filters, viewType, setViewType } = useDiamondContext();
  const { t } = useTranslation();

  const fetchFunc = useCallback(
    async (params: {
      limit?: number | undefined;
      lastRecordId?: string | null;
      count?: boolean;
    }) => {
      return await getDiamonds(params);
    },
    [filters]
  );

  const queryParams = filtersToQueryParams(filters);

  const { data: axiosResponse, isLoading } = useQuery<
    AxiosResponse<ResponseData<Diamond[]>>
  >({
    queryKey: [QueryKeys.GetDiamonds, filters],
    queryFn: () =>
      debounce(
        fetchFunc({
          limit: DIAMONDS_LIMIT,
          ...queryParams,
          count: true,
        }),
        500
      ),
  });

  const { data: diamonds = [], totalAmount } = axiosResponse?.data ?? {};
  const hasMore = diamonds.length === DIAMONDS_LIMIT;
  const totalCount = totalAmount?.count || 0;

  const handleSwitch = (value: ViewTypeEnum) => {
    setViewType(value);
  };

  return (
    <div className="w-full rounded-[6px] border border-[#CFD3D5] bg-white py-8 md:px-5">
      <div
        className={`md:px-0 px-5 flex min-[639px]:flex-row flex-col-reverse 
      min-[639px]:items-center justify-between min-[639px]:space-x-2`}
      >
        <h2
          className="font-[400] text-[14px] max-[639px]:mt-5"
          style={{ fontFamily: TitleFont, color: SubtitleColor }}
        >
          We found {totalCount.toString()}{" "}
          {t(DiamondTypeToTitle[filters?.type])} diamonds that fit your search.
        </h2>
        <SwitchButton
          isFiltersParam={false}
          onSwitch={handleSwitch}
          options={[
            {
              title: "List",
              value: ViewTypeEnum.List,
              defaultChecked: viewType === ViewTypeEnum.List,
            },
            {
              title: "Grid",
              value: ViewTypeEnum.Grid,
              defaultChecked: viewType === ViewTypeEnum.Grid,
            },
          ]}
        />
      </div>

      {viewType === ViewTypeEnum.List ? (
        <DiamondsList
          hasMore={hasMore}
          loading={isLoading}
          diamonds={diamonds}
        />
      ) : (
        <DiamondsGrid
          hasMore={hasMore}
          loading={isLoading}
          diamonds={diamonds}
        />
      )}
    </div>
  );
});

DiamondsSection.displayName = "DiamondsSection";
