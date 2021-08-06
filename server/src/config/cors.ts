import { client_base_url } from "./credentials";

export const corsOptions = {
  methods: ["GET", "PUT", "POST", "DELETE"],
  origin: "*",
  optionsSuccessStatus: 200,
  credentials: true,
};
