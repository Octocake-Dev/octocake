import React from "react";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/ui/button/Button";

import { schema } from "@/validations/user";
import { useUser } from "@/stores/useUser";
import useUpdateUser from "@/hooks/useUpdateUser";
import WithAuth from "@/hocs/withAuth";

import { ISimpleUser, UserData } from "@/types/user";

const Inputs = [
  { id: "bio", placeholder: "Bio" },
  { id: "location", placeholder: "Location" },
  { id: "githubUrl", placeholder: "Github URL" },
  { id: "twitterUrl", placeholder: "Twitter URL" },
  { id: "mediumUrl", placeholder: "Medium URL" },
  { id: "stackOverflowUrl", placeholder: "Stack Overflow URL" },
  { id: "websiteUrl", placeholder: "Website URL" },
];

const Profile = () => {
  const currentUser = useUser((state) => state.user);

  const { mutate: updateUser } = useUpdateUser(
    currentUser?.githubUsername as string
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: UserData) => {
    updateUser(data);
  };

  return (
    <>
      <NextSeo title="Profile" noindex nofollow />

      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="oc_text-3xl">{currentUser?.githubName}</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id: inputId, placeholder }) => (
            <div className="my-4" key={inputId}>
              <h2 className="oc_text-lg">{placeholder}</h2>

              <input
                type="text"
                id={inputId}
                placeholder={placeholder}
                defaultValue={currentUser?.[inputId as keyof ISimpleUser]}
                className="block"
                {...register(inputId)}
              />

              {errors[inputId] && (
                <p className="font-medium text-red-500">
                  {errors[inputId].message}
                </p>
              )}
            </div>
          ))}

          <Button type="submit">Update profile</Button>
        </form>
      </section>
    </>
  );
};

export default WithAuth(Profile);
