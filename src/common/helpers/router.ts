import queryString from "query-string";

export const useCustomUrlQuery = (search: string) => {
  return queryString.parse(search);
};
