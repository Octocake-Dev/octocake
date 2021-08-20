import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useUser } from "@/stores/useUser";

// TODO: Remove any
const WithAuth = (WrappedComponent: any) =>
  function WithAuthWrapper(props: any) {
    const { push } = useRouter();
    const logged_in = useUser((state) => state.logged_in);

    useEffect(() => {
      !logged_in && push("/");
    }, [logged_in]);

    return logged_in ? (
      <WrappedComponent {...props} />
    ) : (
      <p>You can&apos;t access this page. Please login.</p>
    );
  };

export default WithAuth;
