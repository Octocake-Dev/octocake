import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import Router from "next/router";

import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import NProgress from "nprogress";

import { useUser } from "@/stores/useUser";
import { QueryClientOptions } from "@/lib/queryClient";
import Global from "@/layouts/global";
import SEO from "next-seo.config";

import "nprogress/nprogress.css";
import "@/styles/globals.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient(QueryClientOptions));

  const fetchUser = useUser((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  });

  return (
    <>
      <DefaultSeo {...SEO} />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider
            attribute="class"
            // @ts-ignore
            forcedTheme={Component.theme || null}
          >
            <Global>
              <Component {...pageProps} />
            </Global>
          </ThemeProvider>
        </Hydrate>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
