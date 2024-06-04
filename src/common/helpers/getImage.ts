import axiosInstance from "api/AxiosInstance";
import { Env } from "common/types/global";

const { NODE_ENV, PROD_BASE_URL, DEV_BASE_URL } = process.env;

export const getImage = (imageURL: string) => {
  const baseURL = NODE_ENV === Env.Production ? PROD_BASE_URL : DEV_BASE_URL;
  return `${baseURL}/images/${imageURL}`;
};
