import express from "express";

const router = express();

router.get("/", (req, res) => {
  res.send(req.cookies.oc_token);
});

export default router;
