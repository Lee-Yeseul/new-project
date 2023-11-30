import { CompoundItem } from "@src/types/common";

type DropdownItem = CompoundItem & {
  onClick?: () => void;
};

export default function Dropdown({ children, className }: CompoundItem) {
  return (
    <ul
      className={`${className} absolute border-solid border-1 border-gray-300 shadow-md`}
    >
      {children}
    </ul>
  );
}

function Item({ children, className, onClick }: DropdownItem) {
  return (
    <li className={`px-4 py-3 ${className}`} onClick={onClick}>
      {children}
    </li>
  );
}

Dropdown.Item = Item;
