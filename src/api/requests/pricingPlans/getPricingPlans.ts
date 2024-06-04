import { AxiosError, AxiosResponse } from "axios";
import { ResponseData } from "../../../common/types/api";
import { Endpoints } from "../../../common/constants/api";
import axiosInstance from "api/AxiosInstance";
import { PricingPlan } from "common/types/pricingPlans";

export const getPricingPlans = async () => {
  try {
    return await axiosInstance.get<ResponseData<PricingPlan[]>>(
      Endpoints.GetPricingPlans
    );
  } catch (error) {
    return (error as AxiosError).response?.data as AxiosResponse<
      ResponseData<PricingPlan[]>
    >;
  }
};
