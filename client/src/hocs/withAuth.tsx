import React from "react";

import { useUser } from "@/stores/useUser";

// TODO: Remove any
const WithAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const logged_in = useUser((state) => state.logged_in);

    return logged_in ? (
      <WrappedComponent {...props} />
    ) : (
      "You can't access this page. Please login."
    );
  };
};

export default WithAuth;
