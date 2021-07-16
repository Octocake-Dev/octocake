import React from "react";
import PropTypes from "prop-types";

import Header from "@/components/header";
import Footer from "@/components/footer";

const Global = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Global.propTypes = {
  children: PropTypes.node,
};

export default Global;
