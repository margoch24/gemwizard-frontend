import { AxiosError, AxiosResponse } from "axios";
import { ResponseData } from "../../../common/types/api";
import { Endpoints } from "../../../common/constants/api";
import { Diamond } from "../../../common/types/diamonds";
import axiosInstance from "api/AxiosInstance";

export const getDiamonds = async (params = {}) => {
  try {
    return await axiosInstance.get<ResponseData<Diamond[]>>(
      Endpoints.GetDiamonds,
      {
        params: { ...params },
      }
    );
  } catch (error) {
    return (error as AxiosError).response?.data as AxiosResponse<
      ResponseData<Diamond[]>
    >;
  }
};
