import { Request } from "express";

export interface CustomRequest extends Request {
  user: { id: string; iat: number; exp: number };
}
