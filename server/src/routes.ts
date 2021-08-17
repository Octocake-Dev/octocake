import { Router } from "express";

import githubOAuth from "./routes/auth/github";

import users from "./routes/users";
import currentUser from "./routes/current_user";

import posts from "./routes/posts";

const routes = Router();

// Auth
routes.use("/auth/github", githubOAuth);

// Users
routes.use("/users", users);
routes.use("/current_user", currentUser);

// Posts
routes.use("/posts", posts);

export default routes;
