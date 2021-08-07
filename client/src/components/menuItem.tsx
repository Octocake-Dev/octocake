import { Menu } from "@headlessui/react";

type MenuItemProps = {
  children: React.ReactNode;
  warning?: boolean;
  onClick?: () => void;
};

const MenuItem = ({ children, warning, onClick }: MenuItemProps) => (
  <Menu.Item onClick={onClick}>
    {({ active }) => (
      <button
        className={`${
          active
            ? warning
              ? "bg-red-500 text-white"
              : "bg-primary-500 text-white"
            : "text-gray-900"
        } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
      >
        {children}
      </button>
    )}
  </Menu.Item>
);

export default MenuItem;
