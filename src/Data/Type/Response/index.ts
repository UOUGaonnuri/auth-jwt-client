export interface BaseResponse<T = any> {
  status: string;
  data: T;
  message: string;
}
