import jwt from "jsonwebtoken";

import { jwt_key } from "../config/credentials.js";

const verifyToken = (req, res, next) => {
  const token = req.headers["gh_token"];

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
