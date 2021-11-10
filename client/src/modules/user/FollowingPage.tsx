import React from "react";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";
import UserCard from "@/components/UserCard";

import type { IUserFollowing } from "@/api/user/getUserFollowing";

const FollowingPage = ({ user }: { user: IUserFollowing | undefined }) => (
  <>
    <NextSeo
      title="Following"
      canonical={`${baseUrl}u/${user?.githubUsername}/following`}
    />

    <section>
      <h1 className="oc_text-2xl">Following</h1>

      {user?.following.map((followedUser) => (
        <UserCard
          user={followedUser}
          userRoute={user.githubUsername}
          key={followedUser.id}
        />
      ))}
    </section>
  </>
);

export default FollowingPage;
