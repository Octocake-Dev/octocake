import React from "react";

import { Toaster } from "react-hot-toast";

const CustomToaster = () => (
  <Toaster
    position="bottom-center"
    toastOptions={{
      duration: 4000,
      style: { fontWeight: 600, maxWidth: "100%" },

      success: {
        style: { background: "var(--color-primary-900)", color: "#fff" },
      },
      error: {},
      loading: {},
    }}
  />
);

export default CustomToaster;
