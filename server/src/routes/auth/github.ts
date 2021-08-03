import express, { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import { jwt_key } from "../../config/credentials.js";

import { CustomRequest } from "../../types/request";

const router = express.Router();

router.get("/", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
  "/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = jwt.sign({ id: req.user.id }, jwt_key, {
      expiresIn: 60 * 60 * 24 * 1000,
    });

    res.cookie("oc_token", token, {
      secure: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000,
      sameSite: "lax",
    });

    req.logIn(req.user, (err) => {
      if (err) return next(err);
      res.redirect(`http://localhost:3000`);
    });
  }
);

router.get("/logout", (req: Request, res: Response) => {
  res.clearCookie("oc_token");
  req.logout();
  res.redirect("http://localhost:3000");
});

export default router;
