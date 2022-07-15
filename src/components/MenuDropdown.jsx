import { useState } from "react";

function MenuDropdown({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="menu__dropdown-list-item" onClick={toggleOpen}>
      {" "}
      <div
        className={`menu__dropdown-cross ${
          isOpen ? "menu__dropdown-cross--open" : ""
        }`}
      ></div>{" "}
      {title}
    </li>
  );
}

export default MenuDropdown;
