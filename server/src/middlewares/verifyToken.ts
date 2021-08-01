import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

import { jwt_key } from "../config/credentials";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["oc_token"] as string;

  jwt.verify(token, jwt_key, (err, data) => {
    if (err) {
      return null;
    } else {
      req.user = data;
      next();
    }
  });
};

export default verifyToken;
