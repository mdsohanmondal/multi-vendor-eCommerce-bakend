import { Response } from 'express';

interface IPayload<T = any> {
  status: number;
  data: T;
  count?: number;
  success: true;
}

export function responseJSON<T>(res: Response, payload: IPayload<T>) {
  const { status = 200, ...rest } = payload;
  return res.status(status).json({ ...rest });
}

interface IerrorPayload {
  error: any;
  success: false;
  message: string;
  status: number;
}
export function errorResponse(res: Response, payload: IerrorPayload) {
  const { status, ...rest } = payload;
  return res.status(status).json(rest);
}
