import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Button } from "octocake-ui";

const Custom404 = () => {
  const [deviceInnerHeight, setDeviceInnerHeight] = useState<number>();

  useEffect(() => {
    setDeviceInnerHeight(window.innerHeight);
  }, [deviceInnerHeight]);

  return (
    <>
      <section
        className="flex flex-col justify-center items-center space-y-5"
        style={{ minHeight: deviceInnerHeight }}
      >
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
};

export default Custom404;
