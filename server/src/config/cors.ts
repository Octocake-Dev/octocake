import { config } from "./credentials";

export const corsOptions = {
  methods: ["GET", "PUT", "POST", "DELETE"],
  origin: config.client_base_url,
  optionsSuccessStatus: 200,
  credentials: true,
};
