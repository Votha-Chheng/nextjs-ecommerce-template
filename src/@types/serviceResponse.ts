export type ServiceResponse<T> = {
  data?: T
  message: string
  statusResponse: number
}