import type { TCurrentUser } from "@/types/user";

export const checkIsFollowed = (
  followers: TCurrentUser[] | undefined,
  currentUserId: number | undefined
) => followers?.filter((follower) => follower.id === currentUserId);
