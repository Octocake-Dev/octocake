import express from "express";

import currentUser from "./routes/user.js";
import githubOAuth from "./routes/auth/github.js";
import user from "./routes/user/index.js";
import ghToken from "./routes/gh_token.js";

const routes = express.Router();

routes.use("/current_user", currentUser);
routes.use("/auth/github", githubOAuth);
routes.use("/user", user);
routes.use("/gh_token", ghToken);

export default routes;
