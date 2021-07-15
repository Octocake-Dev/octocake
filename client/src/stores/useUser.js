import create from "zustand";

import { instance } from "@/utils/axios";

export const useUser = create((set) => ({
  user: null,
  logged_in: false,
  gh_token: null,
  fetchUser: async () => {
    const { data: gh_token } = await instance.get("/gh_token", {
      withCredentials: true,
    });

    try {
      const { data: user } = await instance.get("/current_user", {
        headers: { gh_token },
      });

      set({ user, logged_in: true, gh_token });
    } catch (err) {
      throw new Error(err);
    }
  },
}));
