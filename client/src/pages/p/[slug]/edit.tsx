import React from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "octocake-ui";

import { schema } from "@/validations/post";
import { useGetPostBySlug } from "@/api/post/getPostBySlug";
import useEditPost from "@/hooks/useEditPost";

import { PostData } from "@/types/post";

// TODO: Make this route secure, Just post's owner should be able to access this route.
const Edit = () => {
  const { query } = useRouter();

  const { data: post } = useGetPostBySlug(query.slug as string);

  const { mutate: editPost } = useEditPost(query.slug as string);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { title: post?.title, description: post?.description },
  });

  const onSubmit = ({ title, description, published = true }: PostData) => {
    editPost({ title, description, published });
  };

  return (
    <>
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

          <Button type="submit">Submit</Button>
        </form>
      </section>
    </>
  );
};

export default Edit;
