import { AxiosError, AxiosResponse } from "axios";
import { ResponseData } from "../../../common/types/api";
import { Endpoints } from "../../../common/constants/api";
import axiosInstance from "api/AxiosInstance";
import { Review } from "common/types/reviews";

export const getReviews = async () => {
  try {
    return await axiosInstance.get<ResponseData<Review[]>>(
      Endpoints.GetReviews
    );
  } catch (error) {
    return (error as AxiosError).response?.data as AxiosResponse<
      ResponseData<Review[]>
    >;
  }
};
