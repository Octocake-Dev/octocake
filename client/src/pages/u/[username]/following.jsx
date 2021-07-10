import React from "react";
import PropTypes from "prop-types";

import { NextSeo } from "next-seo";

const Following = () => {
  return (
    <>
      <NextSeo />

      <section></section>
    </>
  );
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps = async () => {
  return { props: {}, revalidate: 1 };
};

Following.propTypes = {};

export default Following;
