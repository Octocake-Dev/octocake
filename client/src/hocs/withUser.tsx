import React from "react";

import { useUser } from "@/stores/useUser";

// TODO: Remove any
const WithUser = (WrappedComponent: any) =>
  function WithUserWrapper(props: any) {
    const user = useUser((state) => state.user);

    return <WrappedComponent user={user} {...props} />;
  };

export default WithUser;
