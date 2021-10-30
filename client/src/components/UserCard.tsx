import React, { useMemo } from "react";
import Link from "next/link";

import { checkIsFollowed } from "@/utils/checkIsFollowed";
import { useUser } from "@/stores/useUser";
import { useFollow } from "@/hooks/index";
import StyledAvatar from "@/ui/Avatar";
import Button from "@/ui/button/Button";

import type { ISimpleUser } from "@/types/user";

interface Props {
  user: ISimpleUser;
  userRoute: string;
}

const UserCard = ({ user, userRoute }: Props) => {
  const currentUser = useUser((state) => state.user);

  const { githubAvatarUrl, githubUsername, githubName, bio } = user;

  const { mutate: toggleFollow, isLoading } = useFollow(
    githubUsername,
    userRoute
  );

  const isFollowed = useMemo(
    () => checkIsFollowed(user.followedBy, currentUser?.id),
    [user.followedBy, currentUser?.id]
  );

  /**
   * the user should be logged-in to see follow/unFollow button.
   * the user should not be able to see follow/unFollow button on his profile.
   */
  const shouldShowFollowBtn = currentUser && user.id !== currentUser.id;

  return (
    <div className="p-[10px] max-w-2xl my-4 transition-all bg-white shadow-lg hover:shadow-xl rounded-custom">
      <header className="flex items-center justify-between">
        <div className="flex">
          <Link href={`/u/${githubUsername}`}>
            <a className="flex">
              <StyledAvatar src={githubAvatarUrl} width="50" height="50" />
            </a>
          </Link>

          <div className="ml-3 space-y-1">
            <h3 className="oc_text-base">
              <Link href={`/u/${githubUsername}`}>
                <a>{githubName}</a>
              </Link>
            </h3>

            <p className="text-sm text-gray-700 transition-all hover:text-black">
              <Link href={`/u/${githubUsername}`}>
                <a>@{githubUsername}</a>
              </Link>
            </p>
          </div>
        </div>

        {shouldShowFollowBtn && (
          <Button loading={isLoading} onClick={() => toggleFollow()} size="sm">
            {isFollowed?.length ? "UnFollow" : "Follow"}
          </Button>
        )}
      </header>

      <p className="ml-[62px]">{bio}</p>
    </div>
  );
};

export default UserCard;
