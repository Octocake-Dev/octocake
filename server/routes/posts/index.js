import express from "express";

import {
  createPost,
  getPosts,
  getPostBySlug,
  deletePost,
} from "../../controllers/postsController.js";
import verifyToken from "../../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createPost);

router.get("/", getPosts);

router.get("/:slug", getPostBySlug);

router.delete("/:slug", verifyToken, deletePost);

export default router;
