import React, { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useUser } from "@/stores/useUser";
import Loading from "@/components/Loading";

const WithAuth = <P extends any>(WrappedComponent: ComponentType<P>) =>
  function WithAuthWrapper(props: any) {
    const [isLoggedInState, setIsLoggedInState] = useState(false);

    const { push } = useRouter();
    const logged_in = useUser((state) => state.logged_in);
    const user = useUser((state) => state.user);

    useEffect(() => {
      logged_in ? setIsLoggedInState(logged_in) : push("/");
    }, [logged_in, push]);

    return isLoggedInState ? (
      <WrappedComponent user={user} {...props} />
    ) : (
      <Loading />
    );
  };

export default WithAuth;
