import { Response } from "express";

export interface IError {
  field: string;
  message: string;
}

export interface INormalized {
  statusCode: number;
  message: string;
  data?: string[] | object | null | IError[];
}

export const response = (res: Response, normalized: INormalized): Response => {
  res.setHeader("Powered-By", "Max");
  return res.status(normalized.statusCode).json({
    message: normalized.message,
    data: normalized.data,
  });
};
