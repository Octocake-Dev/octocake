import React from "react";
// import PropTypes from "prop-types";

import { NextSeo } from "next-seo";

const Followers = () => {
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

// Followers.propTypes = {};

export default Followers;
