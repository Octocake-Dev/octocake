import create from "zustand";

import { instance } from "@/lib/axios";

import { User } from "@/types/user";

type UserState = {
  user: User | null;
  logged_in: boolean;
  oc_token: string | null;
  fetchUser: () => Promise<void>;
};

export const useUser = create<UserState>((set) => ({
  user: null,
  logged_in: false,
  oc_token: null,
  fetchUser: async () => {
    try {
      const { data: oc_token } = await instance.get("/oc_token", {
        withCredentials: true,
      });

      const { data: user } = await instance.get("/current_user", {
        headers: { oc_token },
      });

      set({ user, logged_in: true, oc_token });
    } catch (err) {
      null;
    }
  },
}));
