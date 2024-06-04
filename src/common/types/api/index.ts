export type ResponseData<T> = {
  data: T & { message?: string };
  error: boolean;
  totalAmount?: { count?: number };
};
