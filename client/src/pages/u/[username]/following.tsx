/* eslint-disable arrow-body-style */
import React from "react";
import type { GetStaticProps, GetStaticPaths } from "next";

import { NextSeo } from "next-seo";

import WIP from "@/components/WIP";

const Following = () => {
  return (
    <>
      <NextSeo title="Following" />

      <WIP />
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
