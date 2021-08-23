import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useUser } from "@/stores/useUser";
import Loading from "@/components/Loading";

// TODO: Remove any
const WithAuth = (WrappedComponent: any) =>
  function WithAuthWrapper(props: any) {
    const { push } = useRouter();
    const logged_in = useUser((state) => state.logged_in);

    useEffect(() => {
      !logged_in && push("/");
    }, [logged_in]);

    return logged_in ? <WrappedComponent {...props} /> : <Loading />;
  };

export default WithAuth;
