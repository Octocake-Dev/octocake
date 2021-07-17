import { combine } from "zustand/middleware";
import create from "zustand";

import { instance } from "@/utils/axios";

export const useUser = create(
  combine({ user: null, logged_in: false, oc_token: null }, (set) => ({
    fetchUser: async () => {
      const { data: oc_token } = await instance.get("/oc_token", {
        withCredentials: true,
      });

      try {
        const { data: user } = await instance.get("/current_user", {
          headers: { oc_token },
        });

        set({ user, logged_in: true, oc_token });
      } catch (err) {
        throw new Error(err);
      }
    },
  }))
);
