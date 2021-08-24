import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

import { config } from "../config/credentials";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.oc_token as string;

  jwt.verify(token, config.jwt_key, (err, data) => {
    if (err) {
      res.status(403).send({ success: false, message: "Not Authenticated" });
    } else {
      req.user = data;
      next();
    }
  });
};

export default verifyToken;
