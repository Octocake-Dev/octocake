import { Menu } from "@headlessui/react";

type MenuItemProps = {
  children: React.ReactNode;
  warning?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const MenuItem = ({ children, warning, onClick, disabled }: MenuItemProps) => (
  <Menu.Item onClick={onClick} disabled={disabled}>
    {({ active }) => (
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

export default MenuItem;
