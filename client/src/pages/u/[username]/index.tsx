import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";

import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { checkIsFollowed } from "@/utils/checkIsFollowed";
import { getUser, useGetUser } from "@/api/user/getUser";
import { baseUrl } from "@/lib/constants";
import { useUser } from "@/stores/useUser";
import { useFollow } from "@/hooks/index";
import Loading from "@/components/Loading";
import Posts from "@/components/Posts";
import Button from "@/ui/button/Button";
import SocialLinks from "@/modules/user/SocialLinks";

// i know this code is kinda garbage, I just need to complete the design and I will refactor it later!

const User = () => {
  const { isFallback, query } = useRouter();
  const currentUser = useUser((state) => state.user);

  const { mutate: toggleFollow, isLoading } = useFollow(
    query.username as string
  );
  const { data: user } = useGetUser(query.username as string);

  const isFollowed = useMemo(
    () => checkIsFollowed(user?.followedBy, currentUser?.id),
    [user?.followedBy, currentUser?.id]
  );

  if (isFallback) return <Loading />;

  /**
   * the user should be logged-in to see follow/unFollow button.
   * the user should not be able to see follow/unFollow button on his profile.
   */
  const shouldShowFollowBtn = currentUser && user?.id !== currentUser.id;

  return (
    <>
      <NextSeo
        title={user?.githubName}
        description={user?.bio}
        canonical={`${baseUrl}/u/${user?.githubUsername}`}
        openGraph={{
          images: [
            { url: user?.githubAvatarUrl as string, alt: user?.githubName },
          ],
        }}
      />

      <section>
        <div>
          <h1 className="oc_text-4xl">{user?.githubName}</h1>

          <p>
            <Link href={`${user?.githubUsername}/followers`}>
              <a className="text-gray-700 transition-all hover:text-black">
                <span className="font-medium text-black">
                  {user?._count.followedBy}
                </span>{" "}
                Followers
              </a>
            </Link>
          </p>
          <p>
            <Link href={`${user?.githubUsername}/following`}>
              <a className="text-gray-700 transition-all hover:text-black">
                <span className="font-medium text-black">
                  {user?._count.following}
                </span>{" "}
                Following
              </a>
            </Link>
          </p>

          <p>{user?.bio}</p>
          <p>{user?.location}</p>

          <SocialLinks user={user} />

          {shouldShowFollowBtn && (
            <Button loading={isLoading} onClick={() => toggleFollow()}>
              {isFollowed?.length ? "UnFollow" : "Follow"}
            </Button>
          )}
        </div>

        <Posts posts={user?.posts} />
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const queryClient = new QueryClient();

  const user = await queryClient.fetchQuery(["user", params?.username], () =>
    getUser(params?.username as string)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    // FIXME: Fix TS error
    // @ts-ignore
    notFound: user.name === "NotFoundError",
    revalidate: 1,
  };
};

export default User;
