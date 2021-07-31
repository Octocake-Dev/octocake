import { Menu } from "@headlessui/react";

type MenuItemProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const MenuItem = ({
  children,
  className,
  onClick,
}: MenuItemProps): JSX.Element => (
  <Menu.Item onClick={onClick}>
    {({ active }) => (
      <button
        className={`${
          active ? className || "bg-primary-500 text-white" : "text-gray-900"
        } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
      >
        {children}
      </button>
    )}
  </Menu.Item>
);

export default MenuItem;
