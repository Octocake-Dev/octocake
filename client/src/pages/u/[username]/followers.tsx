/* eslint-disable arrow-body-style */
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { NextSeo } from "next-seo";

const Followers = () => {
  return (
    <>
      <NextSeo />

      <section></section>
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

export default Followers;
