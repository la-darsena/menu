import DropdownItem from "./DropdownItem";
import Sottosezione from "./Sottosezione";

function MenuDropdown({ title, index, handleClick, openDropdown, content }) {
  const onClick = () => {
    handleClick(index);
  };

  return (
    <li className="menu__dropdown-list-item-container">
      <div className="menu__dropdown-list-item" onClick={onClick}>
        {" "}
        <div
          className={`menu__dropdown-cross ${
            openDropdown === index ? "menu__dropdown-cross--open" : ""
          }`}
        ></div>{" "}
        <h2 className="menu__dropdown-title">{title}</h2>
      </div>
      <div
        className={`menu__dropdown-content ${
          openDropdown === index ? "menu__dropdown-content--open" : ""
        }`}
      >
        <ul className="menu__dropdown-inner-list">
          {content.map((item, index) =>
            !item.sottosezione ? (
              <DropdownItem
                key={item.nome}
                name={item.nome}
                price={item.prezzo}
                text={item.testo}
              />
            ) : (
              <Sottosezione key={item.sottosezione} title={item.sottosezione} />
            )
          )}
        </ul>
      </div>
    </li>
  );
}

export default MenuDropdown;
