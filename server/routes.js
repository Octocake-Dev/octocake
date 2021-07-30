import express from "express";

import currentUser from "./routes/user.js";
import githubOAuth from "./routes/auth/github.js";
import users from "./routes/users/index.js";
import ocToken from "./routes/oc_token.js";

import posts from "./routes/posts/index.js";

const routes = express.Router();

// Auth
routes.use("/auth/github", githubOAuth);

// Cookies
routes.use("/oc_token", ocToken);

// Users
routes.use("/users", users);
routes.use("/current_user", currentUser);

// Posts
routes.use("/posts", posts);

export default routes;
