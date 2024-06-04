import { AxiosError, AxiosResponse } from "axios";
import { ResponseData } from "../../../common/types/api";
import { Endpoints } from "../../../common/constants/api";
import axiosInstance from "api/AxiosInstance";

export const postContactUs = async (params = {}) => {
  try {
    return await axiosInstance.post<ResponseData<{ contactId: string }>>(
      Endpoints.ContactUs,
      {
        ...params,
      }
    );
  } catch (error) {
    return (error as AxiosError).response?.data as AxiosResponse<
      ResponseData<{ contactId: string }>
    >;
  }
};
