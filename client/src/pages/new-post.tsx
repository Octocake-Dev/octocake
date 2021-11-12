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
    body,
    published = isPublished,
  }: PostData) => createPost({ title, description, body, published });

  return (
    <>
      <NextSeo title="New Post" />

      <section>
        <h1 className="oc_text-3xl">New Post</h1>

        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="block"
              {...register("title")}
            />
            {errors.title && (
              <p className="font-medium text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              id="description"
              placeholder="Description"
              className="block"
              {...register("description")}
            />
            {errors.description && (
              <p className="font-medium text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              id="body"
              placeholder="Body"
              className="block"
              {...register("body")}
            />
            {errors.body && (
              <p className="font-medium text-red-500">{errors.body.message}</p>
            )}
          </div>

          <div>
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
          </div>
        </form>
      </section>
    </>
  );
};

export default withAuth(NewPost);
