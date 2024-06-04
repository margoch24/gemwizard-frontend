import axios from "axios";
import { Env } from "../common/types/global";
const { NODE_ENV, PROD_BASE_URL, DEV_BASE_URL, TOKEN } = process.env;

const axiosInstance = axios.create({
  baseURL: NODE_ENV === Env.Production ? PROD_BASE_URL : DEV_BASE_URL,
  headers: {
    token: TOKEN,
  },
});

export default axiosInstance;
