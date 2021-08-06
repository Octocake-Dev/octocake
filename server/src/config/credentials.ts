import dotenv from "dotenv";

dotenv.config();

export const jwt_key = process.env.JWT_KEY;
export const server_port = process.env.PORT || 3000;
export const github_client_id = process.env.GITHUB_ID;
export const github_client_secret = process.env.GITHUB_SECRET;
export const client_base_url =
  process.env.CLIENT_BASE_URL || "http://localhost:3000";
export const api_base_url =
  process.env.API_BASE_URL || `http://localhost:${server_port}`;
