import React from "react";
import { useRouter } from "next/router";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";

import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getUser, useGetUser, useIsFollowed } from "@/api/user/getUser";
import { baseUrl } from "@/lib/constants";
import { useUser } from "@/stores/useUser";
import { useFollow } from "@/hooks/index";
import Loading from "@/components/Loading";
import Posts from "@/components/Posts";
import Button from "@/ui/button/Button";
import SocialLinks from "@/modules/user/SocialLinks";

const User = () => {
  const { isFallback, query } = useRouter();
  const currentUser = useUser((state) => state.user);

  const { mutate: toggleFollow, isLoading } = useFollow(
    query.username as string
  );
  const { data: user } = useGetUser(query.username as string);
  const { data: isFollowed } = useIsFollowed(query.username as string);

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
          <p>Followers: {user?.followedBy.length}</p>
          <p>Following: {user?.following.length}</p>
          <p>{user?.bio}</p>
          <p>{user?.location}</p>

          <SocialLinks user={user} />

          {shouldShowFollowBtn && (
            <Button loading={isLoading} onClick={() => toggleFollow()}>
              {isFollowed?.followedBy.length ? "UnFollow" : "Follow"}
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    notFound: user.name === "NotFoundError",
    revalidate: 1,
  };
};

export default User;
