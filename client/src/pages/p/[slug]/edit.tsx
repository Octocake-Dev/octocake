import React from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "octocake-ui";

import { schema } from "@/validations/post";
import { useGetPostBySlug } from "@/api/post/getPostBySlug";
import { useUser } from "@/stores/useUser";
import useEditPost from "@/hooks/useEditPost";

// TODO: Make this route secure, Just post's owner should be able to access this route.
const Edit = () => {
  const { query } = useRouter();

  const { data: post } = useGetPostBySlug(query.slug as string);

  const oc_token = useUser((state) => state.oc_token);

  const { mutate: editPost } = useEditPost(
    String(query.slug),
    String(oc_token)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { title: post?.title, description: post?.description },
  });

  // TODO: Remove any
  const onSubmit = ({ title, description, published = true }: any): any => {
    editPost({ title, description, published });
  };

  return (
    <>
      <section className="flex justify-center">
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
