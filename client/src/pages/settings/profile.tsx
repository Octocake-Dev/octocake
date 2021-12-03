import React from "react";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/ui/button/Button";

import { schema, SchemaTypes } from "@/validations/user";
import { useUpdateUser } from "@/hooks/index";
import WithAuth from "@/hocs/withAuth";

import type { TCurrentUser, UserData } from "@/types/user";

const Inputs = [
  { id: "bio", placeholder: "Bio" },
  { id: "location", placeholder: "Location" },
  { id: "twitterUrl", placeholder: "Twitter URL" },
  { id: "mediumUrl", placeholder: "Medium URL" },
  { id: "stackOverflowUrl", placeholder: "Stack Overflow URL" },
  { id: "websiteUrl", placeholder: "Website URL" },
];

const Profile: NextPage<{ user: TCurrentUser }> = ({ user }) => {
  const { mutate: updateUser, isLoading } = useUpdateUser(user.githubUsername);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: UserData) => updateUser(data);

  return (
    <>
      <NextSeo title="Profile" />

      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="oc_text-3xl">{user.githubName}</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id: inputId, placeholder }) => (
            <div className="my-4" key={inputId}>
              <h2 className="oc_text-lg">{placeholder}</h2>

              <input
                type="text"
                id={inputId}
                placeholder={placeholder}
                defaultValue={user[inputId as keyof SchemaTypes]}
                className="block"
                {...register(inputId as keyof SchemaTypes)}
              />

              {errors[inputId as keyof SchemaTypes] && (
                <p className="font-medium text-red-500">
                  {errors[inputId as keyof SchemaTypes]?.message}
                </p>
              )}
            </div>
          ))}

          <Button loading={isLoading} type="submit">
            Update profile
          </Button>
        </form>
      </section>
    </>
  );
};

export default WithAuth(Profile);
