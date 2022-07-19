function DropdownItem({ name, price, text }) {
  return (
    <li className="menu__dropdown-inner-list-item">
      <div className="dropdown-item">
        <div className="dropdown-item__container">
          <div className="dropdown-item__text-container">
            <h3 className="dropdown-item__name">{name}</h3>
            <p className="dropdown-item__text">{text}</p>
          </div>
          {price && <span className="dropdown-item__price">€ {price}</span>}
        </div>
      </div>
    </li>
  );
}

export default DropdownItem;
