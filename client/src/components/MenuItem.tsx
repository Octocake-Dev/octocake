import React, { forwardRef } from "react";

import { Menu } from "@headlessui/react";

type PropsOf<TTag = any> = TTag extends React.ElementType
  ? React.ComponentProps<TTag>
  : never;

type MenuItemProps = {
  warning?: boolean;
};

const MenuItem = (
  { children, warning, ...rest }: MenuItemProps & PropsOf<typeof Menu.Item>,
  ref: any
) => (
  <Menu.Item {...rest}>
    {({ active, disabled }) => (
      <button
        disabled={disabled}
        className={`${
          active
            ? warning
              ? "bg-red-500 text-white"
              : "bg-primary-500 text-white"
            : warning
            ? "text-red-500"
            : "text-gray-900"
        } text-left group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium disabled:oc_disabled`}
      >
        {children}
      </button>
    )}
  </Menu.Item>
);

export default forwardRef(MenuItem);
