/* eslint-disable arrow-body-style */
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { NextSeo } from "next-seo";

const Following = () => {
  return (
    <>
      <NextSeo />

      <section className="flex flex-col justify-center items-center space-y-5 min-h-screen">
        <div>
          <h1 className="text-3xl font-bold">Work In Progress!</h1>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 1 };
};

export default Following;
