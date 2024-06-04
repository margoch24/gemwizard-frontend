import { AxiosError, AxiosResponse } from "axios";
import { ResponseData } from "../../../common/types/api";
import { Endpoints } from "../../../common/constants/api";
import {
  Diamond,
  TotalDiamondsCountType,
} from "../../../common/types/diamonds";
import axiosInstance from "api/AxiosInstance";

export const getTotalDiamondsCount = async (params = {}) => {
  try {
    return await axiosInstance.get<ResponseData<TotalDiamondsCountType>>(
      Endpoints.GetTotalDiamondsCount,
      {
        params: { ...params },
      }
    );
  } catch (error) {
    return (error as AxiosError).response?.data as AxiosResponse<
      ResponseData<TotalDiamondsCountType>
    >;
  }
};
