import React, { ComponentType, useEffect } from "react";
import { useRouter } from "next/router";

import { useUser } from "@/stores/useUser";
import Loading from "@/components/Loading";

const WithAuth = <P extends any>(WrappedComponent: ComponentType<P>) =>
  function WithAuthWrapper(props: any) {
    const { push } = useRouter();
    const logged_in = useUser((state) => state.logged_in);

    useEffect(() => {
      !logged_in && push("/");
    });

    return logged_in ? <WrappedComponent {...props} /> : <Loading />;
  };

export default WithAuth;
