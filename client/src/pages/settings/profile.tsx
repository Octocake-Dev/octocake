import React from "react";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/ui/button/Button";

import { schema } from "@/validations/user";
import { useUser } from "@/stores/useUser";
import useUpdateUser from "@/hooks/useUpdateUser";
import WithAuth from "@/hocs/withAuth";

import { UserData } from "@/types/user";

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

  const { mutateAsync: updateUser } = useUpdateUser(
    currentUser?.githubUsername as string
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: UserData) => {
    await updateUser(data);
  };

  return (
    <>
      <NextSeo title="Profile" noindex nofollow />

      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="oc_text-3xl">{currentUser?.githubName}</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, placeholder }) => (
            <div className="my-4" key={id}>
              <h2 className="oc_text-lg">{placeholder}</h2>

              <input
                type="text"
                id={id}
                placeholder={placeholder}
                className="block"
                {...register(id)}
              />

              {errors[id] && (
                <p className="font-medium text-red-500">{errors[id].message}</p>
              )}
            </div>
          ))}

          <Button type="submit">Submit</Button>
        </form>
      </section>
    </>
  );
};

export default WithAuth(Profile);
