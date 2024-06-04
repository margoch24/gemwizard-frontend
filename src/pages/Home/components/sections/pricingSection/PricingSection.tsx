import { FC, memo, useCallback } from "react";
import { Container } from "../../../../../common/components/wrappers/Container";
import { MainColor, TitleFont } from "../../../../../styles/constants";
import { renderCards } from "../../../../../common/helpers/home";
import { PricingPlanCard } from "./PricingPlanCard";
import { getPricingPlans } from "api/requests/pricingPlans/getPricingPlans";
import { PricingPlan } from "common/types/pricingPlans";
import { debounce } from "common/helpers/debounce";
import { AxiosResponse } from "axios";
import { ResponseData } from "common/types/api";
import { QueryKeys } from "common/constants/api";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const PricingSection: FC = memo(() => {
  const { t } = useTranslation();

  const fetchFunc = useCallback(async () => {
    return await getPricingPlans();
  }, []);

  const { data: axiosResponse } = useQuery<
    AxiosResponse<ResponseData<PricingPlan[]>>
  >({
    queryFn: () => debounce(fetchFunc(), 500),
    queryKey: [QueryKeys.GetPricingPlans],
    refetchOnWindowFocus: false,
  });

  const { data: pricingPlans = [] } = axiosResponse?.data ?? {};

  return (
    <div>
      {pricingPlans?.length > 0 && (
        <Container>
          <div className="md:pt-[150px] pt-[50px]">
            <h1
              className="md:text-[48px] text-[36px] font-[400] tracking-wide mb-20"
              style={{ color: MainColor, fontFamily: TitleFont }}
            >
              {t("pricingSection.title")}
            </h1>

            <div className="flex lg:flex-row flex-col xl:justify-around lg:space-x-10 space-y-10 lg:space-y-0">
              {renderCards(pricingPlans, PricingPlanCard)}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
});

PricingSection.displayName = "PricingSection";
