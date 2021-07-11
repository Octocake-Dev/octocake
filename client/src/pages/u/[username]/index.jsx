import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import { NextSeo } from "next-seo";

const User = ({ user }) => {
  const { isFallback } = useRouter();

  if (isFallback) return <div>loading...</div>;

  return (
    <>
      <NextSeo title={`${user.githubName} - Octocake`} />

      <section>
        <div>
          <code>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </code>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:1337/user/${params.username}`);
  const user = await res.json();

  return { props: { user }, revalidate: 1 };
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
