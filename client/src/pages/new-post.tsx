import React from "react";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "octocake-ui";

import { schema } from "@/validations/post";
import withAuth from "@/hocs/withAuth";
import useCreatePost from "@/hooks/useCreatePost";

import { PostData } from "@/types/post";

const NewPost = () => {
  const { mutate: createPost, isLoading } = useCreatePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ title, description, published = true }: PostData) => {
    createPost({ title, description, published });
  };

  return (
    <>
      <NextSeo title="New Post" />

      <section className="flex flex-col justify-center items-center space-y-5 min-h-screen">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="title"
            placeholder="title"
            {...register("title")}
          />
          <p>{errors.title?.message}</p>

          <input
            type="text"
            id="description"
            placeholder="description"
            {...register("description")}
          />
          <p>{errors.description?.message}</p>

          <Button disabled={isLoading} type="submit">
            Submit
          </Button>
        </form>
      </section>
    </>
  );
};

export default withAuth(NewPost);
