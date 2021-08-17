import { Router } from "express";

import {
  createPost,
  getPosts,
  getPostBySlug,
  deletePost,
  updatePost,
} from "../controllers/posts.controller";
import verifyToken from "../middlewares/verifyToken";

const router = Router();

router.post("/", verifyToken, createPost);

router.get("/", getPosts);

router.get("/:slug", getPostBySlug);

router.delete("/:slug", verifyToken, deletePost);

router.put("/:slug", verifyToken, updatePost);

export default router;
