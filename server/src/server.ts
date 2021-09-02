import express, { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import logger from "morgan";
import passport from "passport";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";

import { corsOptions } from "./config/cors";
import { config } from "./config/credentials";
import routes from "./routes";
import "./config/passport";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500).send(err);
});

app.listen(config.server_port, () =>
  console.log(`> Ready on http://localhost:${config.server_port}`)
);
