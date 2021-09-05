import React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

const Global = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="oc_page">{children}</main>
    <Footer />
  </>
);

export default Global;
