import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { NextSeo } from "next-seo";

const Following = () => {
  return (
    <>
      <NextSeo />

      <section></section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 1 };
};

export default Following;
