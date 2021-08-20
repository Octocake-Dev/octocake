import create from "zustand";
import { persist } from "zustand/middleware";

import { instance } from "@/lib/axios";

import { User } from "@/types/user";

type UserState = {
  user: User | null;
  logged_in: boolean;
  fetchUser: () => Promise<void>;
};

export const useUser = create<UserState>(
  persist(
    (set) => ({
      user: null,
      logged_in: false,
      fetchUser: async () => {
        try {
          const { data: user } = await instance.get("/current_user");

          set({ user, logged_in: true });
        } catch (err) {
          set({ user: null, logged_in: false });
        }
      },
    }),
    { name: "current_user" }
  )
);
