import React from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "octocake-ui";
import { NextSeo } from "next-seo";

import { useUser } from "@/stores/useUser";
import { schema } from "@/validations/post";
import { useGetPostBySlug } from "@/api/post/getPostBySlug";
import useEditPost from "@/hooks/useEditPost";
import Loading from "@/components/Loading";
import ErrorPage from "@/pages/404";

import { PostData } from "@/types/post";

const Edit = () => {
  const { query } = useRouter();

  const currentUser = useUser((state) => state.user);

  const { data: post, isLoading } = useGetPostBySlug(query.slug as string);
  const { mutate: editPost } = useEditPost(query.slug as string);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ title, description, published = true }: PostData) => {
    editPost({ title, description, published });
  };

  if (isLoading) return <Loading />;

  // If the user is not the owner of the post then show error 404 page.
  // FIXME: Fix TS error
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (post?.name === "NotFoundError" || currentUser?.id !== post?.ownerId)
    return <ErrorPage />;

  return (
    <>
      <NextSeo title="Edit Post" noindex nofollow />

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

export default Edit;
