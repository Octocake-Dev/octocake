import type { ISimpleUser } from "@/types/user";

export const checkIsFollowed = (
  // The type is not correct 100%, But it works fine(I'll fix that later).
  followers: ISimpleUser[],
  currentUserId: number | undefined
) => followers?.filter((follower) => follower.id === currentUserId);
