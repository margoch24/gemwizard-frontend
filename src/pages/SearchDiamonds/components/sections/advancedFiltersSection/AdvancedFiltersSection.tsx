import { FC, memo, useCallback } from "react";
import { AdvancedFiltersDesktop } from "./AdvancedFiltersDesktop";
import { AdvancedFiltersMobile } from "./AdvancedFiltersMobile";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ResponseData } from "common/types/api";
import { debounce } from "common/helpers/debounce";
import { QueryKeys } from "common/constants/api";
import { TotalDiamondsCountType } from "common/types/diamonds";
import { getTotalDiamondsCount } from "api/requests/diamonds/getTotalDiamondsCount";

export const AdvancedFiltersSection: FC = memo(() => {
  const fetchFunc = useCallback(async () => {
    return await getTotalDiamondsCount();
  }, []);

  const { data: axiosResponse } = useQuery<
    AxiosResponse<ResponseData<TotalDiamondsCountType>>
  >({
    queryFn: () => debounce(fetchFunc(), 500),
    queryKey: [QueryKeys.GetTotalDiamondsCount],
    refetchOnWindowFocus: false,
  });

  const { totalDiamondsCount } = axiosResponse?.data?.data ?? {};

  return (
    <>
      <AdvancedFiltersDesktop totalDiamondsCount={totalDiamondsCount} />
      <AdvancedFiltersMobile totalDiamondsCount={totalDiamondsCount} />
    </>
  );
});

AdvancedFiltersSection.displayName = "AdvancedFiltersSection";
