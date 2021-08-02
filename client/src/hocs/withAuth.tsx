/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { useUser } from "@/stores/useUser";

// TODO: Remove any
const WithAuth = (WrappedComponent: any) => {
  return function foo(props: any) {
    const logged_in = useUser((state) => state.logged_in);

    return logged_in ? (
      <WrappedComponent {...props} />
    ) : (
      <p>You can&apos;t access this page. Please login.</p>
    );
  };
};

export default WithAuth;
