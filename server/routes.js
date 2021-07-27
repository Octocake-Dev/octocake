import express from "express";

import currentUser from "./routes/user.js";
import githubOAuth from "./routes/auth/github.js";
import user from "./routes/user/index.js";
import ocToken from "./routes/oc_token.js";

import posts from "./routes/posts/index.js";

const routes = express.Router();

routes.use("/current_user", currentUser);
routes.use("/auth/github", githubOAuth);
routes.use("/user", user);
routes.use("/oc_token", ocToken);

// Post
routes.use("/posts", posts);

export default routes;
