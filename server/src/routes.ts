import express from "express";

import githubOAuth from "./routes/auth/github";

import currentUser from "./routes/user";
import users from "./routes/users/index";

import posts from "./routes/posts/index";

const routes = express.Router();

// Auth
routes.use("/auth/github", githubOAuth);

// Users
routes.use("/users", users);
routes.use("/current_user", currentUser);

// Posts
routes.use("/posts", posts);

export default routes;
