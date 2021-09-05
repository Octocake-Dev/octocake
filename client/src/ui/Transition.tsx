import React, { Fragment } from "react";

import { Transition as HUITransition } from "@headlessui/react";

const Transition = ({ children }: { children: React.ReactNode }) => (
  <HUITransition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    {children}
  </HUITransition>
);

export default Transition;
