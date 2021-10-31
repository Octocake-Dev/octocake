import React from "react";
import { useRouter } from "next/router";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { useUser } from "@/stores/useUser";
import { schema } from "@/validations/post";
import { getPostBySlug, useGetPostBySlug } from "@/api/posts/getPostBySlug";
import { useEditPost } from "@/hooks/index";
import Button from "@/ui/button/Button";
import Loading from "@/components/Loading";
import ErrorPage from "@/pages/404";

import { PostData } from "@/types/post";

const Edit = () => {
  const { isFallback, query } = useRouter();

  const currentUser = useUser((state) => state.user);

  const { data: post } = useGetPostBySlug(query.slug as string);
  const { mutate: editPost, isLoading } = useEditPost(query.slug as string);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ title, description, body, published = true }: PostData) =>
    editPost({ title, description, body, published });

  if (isFallback) return <Loading />;

  const isOwner = currentUser?.id !== post?.ownerId;

  if (isOwner) return <ErrorPage />;

  return (
    <>
      <NextSeo title="Edit Post" />

      <section className="flex flex-col items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="title"
            placeholder="title"
            defaultValue={post?.title}
            className="block"
            {...register("title")}
          />
          {errors.title && (
            <p className="font-medium text-red-500">{errors.title.message}</p>
          )}

          <input
            type="text"
            id="description"
            placeholder="description"
            defaultValue={post?.description}
            className="block"
            {...register("description")}
          />
          {errors.description && (
            <p className="font-medium text-red-500">
              {errors.description.message}
            </p>
          )}

          <textarea
            id="body"
            placeholder="Body"
            className="block"
            {...register("body")}
          />
          {errors.body && (
            <p className="font-medium text-red-500">{errors.body.message}</p>
          )}

          <Button loading={isLoading} type="submit">
            Save changes
          </Button>
        </form>
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

  const post = await queryClient.fetchQuery(["post", params?.slug], () =>
    getPostBySlug(params?.slug as string)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    // FIXME: Fix TS error
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    notFound: post.name === "NotFoundError",
    revalidate: 1,
  };
};

export default Edit;
