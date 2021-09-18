import React from "react";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "@/validations/post";
import withAuth from "@/hocs/withAuth";
import useCreatePost from "@/hooks/useCreatePost";
import Button from "@/ui/button/Button";

import { PostData } from "@/types/post";

const NewPost = () => {
  const { mutateAsync: createPost, isLoading } = useCreatePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async ({
    title,
    description,
    published = true,
  }: PostData) => {
    await createPost({ title, description, published });
  };

  return (
    <>
      <NextSeo title="New Post" />

      <section className="flex flex-col items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="title"
            placeholder="title"
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
            className="block"
            {...register("description")}
          />
          {errors.description && (
            <p className="font-medium text-red-500">
              {errors.description.message}
            </p>
          )}

          <Button disabled={isLoading} type="submit">
            Submit
          </Button>
        </form>
      </section>
    </>
  );
};

export default withAuth(NewPost);
