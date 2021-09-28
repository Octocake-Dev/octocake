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
import { getPostBySlug, useGetPostBySlug } from "@/api/post/getPostBySlug";
import { useEditPost } from "@/hooks/index";
import Button from "@/ui/button/Button";
import Loading from "@/components/Loading";
import ErrorPage from "@/pages/404";

import { PostData } from "@/types/post";

const Edit = () => {
  const { isFallback, query } = useRouter();

  const currentUser = useUser((state) => state.user);

  const { data: post } = useGetPostBySlug(query.slug as string);
  const { mutate: editPost } = useEditPost(query.slug as string);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ title, description, published = true }: PostData) =>
    editPost({ title, description, published });

  if (isFallback) return <Loading />;

  // If the user is not the owner of the post then show error 404 page.
  if (currentUser?.id !== post?.ownerId) return <ErrorPage />;

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

          <Button type="submit">Submit</Button>
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
