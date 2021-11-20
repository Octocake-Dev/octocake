import { Request } from "express";

export interface CustomRequest extends Request {
  user: {
    id: number;
    role: "USER" | "ADMIN";
    iat: number;
    exp: number;
  };
}
