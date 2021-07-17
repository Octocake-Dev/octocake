import React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

type Props = {
  children: React.ReactNode;
};

const Global = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="custom_max_width">{children}</main>
      <Footer />
    </>
  );
};

export default Global;
