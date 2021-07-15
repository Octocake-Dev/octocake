import express from "express";

const router = express();

router.get("/", (req, res) => {
  res.send(req.cookies.gh_token);
});

export default router;
