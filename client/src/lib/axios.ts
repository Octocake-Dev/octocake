import axios from "axios";

import { apiBaseUrl } from "./constants";

export const instance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});
