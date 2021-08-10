import dotenv from "dotenv";

dotenv.config();

export const config = {
  jwt_key: process.env.JWT_KEY,
  server_port: process.env.PORT || 1337,
  github_client_id: process.env.GITHUB_ID,
  github_client_secret: process.env.GITHUB_SECRET,
  client_base_url: process.env.CLIENT_BASE_URL || "http://localhost:3000",
  api_base_url:
    process.env.API_BASE_URL || `http://localhost:${process.env.PORT || 1337}`,
};
