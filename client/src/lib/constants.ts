export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const __DEV__ = process.env.NODE_ENV !== "production";
export const __PROD__ = process.env.NODE_ENV === "production";
