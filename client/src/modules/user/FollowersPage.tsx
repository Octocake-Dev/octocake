import React from "react";

import { NextSeo } from "next-seo";

import { baseUrl } from "@/lib/constants";
import UserCard from "@/components/UserCard";

import type { IUser } from "@/types/user";

const FollowersPage = ({ user }: { user: IUser | undefined }) => (
  <>
    <NextSeo
      title="Followers"
      canonical={`${baseUrl}u/${user?.githubUsername}/followers`}
    />

    <section>
      <h1 className="oc_text-2xl">Followers</h1>

      {user?.followedBy.map((followerUser) => (
        <UserCard
          user={followerUser}
          userRoute={user.githubUsername}
          key={followerUser.id}
        />
      ))}
    </section>
  </>
);

export default FollowersPage;
