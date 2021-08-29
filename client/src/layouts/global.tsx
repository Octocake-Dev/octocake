import React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

type Props = {
  children: React.ReactNode;
};

const Global = ({ children }: Props) => (
  <>
    <Header />
    <main className="oc_page">{children}</main>
    <Footer />
  </>
);

export default Global;
