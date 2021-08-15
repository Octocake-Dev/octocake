import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";

import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { Button } from "octocake-ui";

import { getUser, useGetUser, useIsFollowed } from "@/api/user/getUser";
import Post from "@/components/post";
import useFollow from "@/hooks/useFollow";
import WithUser from "@/hocs/withUser";

import { User as TUser } from "@/types/user";

const User = ({ user: currentUser }: { user: TUser }) => {
  const { isFallback, query } = useRouter();

  const { mutate: toggleFollow, isLoading } = useFollow(
    query.username as string
  );
  const { data: user } = useGetUser(query.username as string);
  const { data: isFollowed } = useIsFollowed(query.username as string);

  if (isFallback) return <div>loading...</div>;

  // the user should be logged-in to see follow/unFollow button.
  // the user should not be able to see follow/unFollow button on his profile.
  const shouldShowFollowBtn =
    currentUser && user?.githubId !== currentUser?.githubId;

  return (
    <>
      <NextSeo title={user?.githubName} />

      <section className="px-5 py-2 bg-gray-100 sm:px-8 md:px-16 xl:px-28 custom_max_width">
        <div>
          <h1 className="text-3xl font-bold">{user?.githubName}</h1>
          <p>Followers: {user?.followedBy.length}</p>
          <p>Following: {user?.following.length}</p>

          {shouldShowFollowBtn && (
            <Button disabled={isLoading} onClick={() => toggleFollow()}>
              {isFollowed?.followedBy.length ? "UnFollow" : "Follow"}
            </Button>
          )}

          {user?.posts.length ? (
            <>
              <h4 className="text-2xl font-bold leading-none">Posts</h4>

              {user.posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </>
          ) : null}
        </div>
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

export default WithUser(User);
