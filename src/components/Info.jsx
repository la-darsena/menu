import React from "react";

function Info({ title }) {
  return (
    <li className="menu__dropdown-inner-list-item">
      <div className="dropdown-item__info">{title}</div>
    </li>
  );
}

export default Info;
