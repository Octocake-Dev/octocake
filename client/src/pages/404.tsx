import React from "react";
import Link from "next/link";

import { NextSeo } from "next-seo";

import Button from "@/ui/button/Button";

const Custom404 = () => (
  <>
    <NextSeo title="Page Not Found" />

    <section className="flex flex-col items-center justify-center min-h-screen space-y-5">
      <div>
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      </div>

      <div>
        <Link href="/">
          <a>
            <Button type="button">Back home</Button>
          </a>
        </Link>
      </div>
    </section>
  </>
);

export default Custom404;
