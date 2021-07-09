import React from "react";
import PropTypes from "prop-types";

import { NextSeo } from "next-seo";

const User = ({ user }) => {
  return (
    <>
      <NextSeo title={user.githubName} />

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

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:1337/user/${params.username}`);
  const user = await res.json();

  return { props: { user }, revalidate: 1 };
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
