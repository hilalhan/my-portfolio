export interface ICommonResponse<T> {
  status: number;
  message: string;
  data?: T;
}

export interface ICommonPaginatedResponse<T> extends ICommonResponse<T> {
  total: number;
  page: number;
  limit: number;
}
