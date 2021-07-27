import express from "express";

import {
  createPost,
  getPosts,
  getPostBySlug,
} from "../../controllers/postController.js";
import verifyToken from "../../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createPost);

router.get("/", getPosts);

router.get("/:slug", getPostBySlug);

export default router;
