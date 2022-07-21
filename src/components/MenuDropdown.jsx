import DropdownItem from "./DropdownItem";
import Sottosezione from "./Sottosezione";
import Info from "./Info";

function MenuDropdown({ title, index, handleClick, openDropdown, content }) {
  const onClick = (e) => {
    handleClick(e, index);
  };

  return (
    <li className="menu__dropdown-list-item-container">
      <div
        className="menu__dropdown-list-item"
        onClick={(e) => {
          onClick(e);
        }}
      >
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
            item.sottosezione ? (
              <Sottosezione key={item.sottosezione} title={item.sottosezione} />
            ) : item.informazione ? (
              <Info key={item.informazione} title={item.informazione} />
            ) : (
              <DropdownItem
                key={item.nome + index}
                name={item.nome}
                nameLowerCase={item.nomeMinuscolo}
                price={item.prezzo}
                priceSpecial={item.prezzoSpecial}
                text={item.testo}
                allergeni={item.allergeni}
              />
            )
          )}
        </ul>
      </div>
    </li>
  );
}

export default MenuDropdown;
