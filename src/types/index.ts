import { Request } from 'express'

export type RequestBody<T> = Request<{}, {}, T>
export type RequestParams<T> = Request<T>
export type RequestQuery<T> = Request<{}, {}, {}, T>
export type RequestBodyParams<TBody, TParams> = Request<TParams, {}, TBody>

export type FeedbackForm = {
  name: string
  email: string
  message: string
}

export enum HttpStatuses {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CREATED = 201,
  NO_CONTENT = 204,
  INTERNAL_SERVER_ERROR = 500,
}
