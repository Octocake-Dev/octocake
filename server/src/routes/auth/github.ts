import { Request, Response, NextFunction, Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import { config } from "../../config/credentials.js";

import { CustomRequest } from "../../types/request";

const router = Router();

router.get("/", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
  "/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = jwt.sign({ id: Number(req.user.id) }, config.jwt_key, {
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
      res.redirect(config.client_base_url);
    });
  }
);

router.get("/logout", (req: Request, res: Response) => {
  res.clearCookie("oc_token");
  req.logout();
  res.redirect(config.client_base_url);
});

export default router;
