import React, { useState } from "react";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "@/validations/post";
import { useCreatePost } from "@/hooks/index";
import withAuth from "@/hocs/withAuth";
import Button from "@/ui/button/Button";

import type { PostData } from "@/types/post";

const NewPost = () => {
  const [isPublished, setIsPublished] = useState<boolean>(false);

  const { mutate: createPost, isLoading } = useCreatePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({
    title,
    description,
    published = isPublished,
  }: PostData) => createPost({ title, description, published });

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

          <Button
            onClick={() => setIsPublished(true)}
            loading={isLoading}
            type="submit"
          >
            Publish
          </Button>

          <Button
            onClick={() => setIsPublished(false)}
            loading={isLoading}
            type="submit"
          >
            Save draft
          </Button>
        </form>
      </section>
    </>
  );
};

export default withAuth(NewPost);
