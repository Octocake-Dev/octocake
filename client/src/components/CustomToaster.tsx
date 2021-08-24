import React from "react";

import { Toaster } from "react-hot-toast";

const CustomToaster = () => (
  <Toaster position="bottom-center" toastOptions={{ duration: 4000 }} />
);

export default CustomToaster;
