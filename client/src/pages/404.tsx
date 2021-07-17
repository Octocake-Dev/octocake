import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center space-y-5">
        <div>
          <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        </div>

        <div>
          <Link href="/">
            <a>
              <button className="text-white font-semibold bg-primary-400 rounded-[10px] py-2 px-4">
                Back home
              </button>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Custom404;
