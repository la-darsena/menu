import { useState } from "react";
import { useLocation } from "react-router-dom";
import RistoranteImg from "../assets/images/ristorante.webp";
import ViniImg from "../assets/images/vini.webp";
import AperitiviImg from "../assets/images/aperitivi.webp";
import MenuDropdown from "../components/MenuDropdown";
import Sezioni from "../dataSezioni";

function Menu() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(-1);

  const path = location.pathname.replace("/", "");

  const handleClick = (index) => {
    if (index !== openDropdown) {
      setOpenDropdown(index);
    } else {
      setOpenDropdown(-1);
    }
  };

  const headerImages = {
    ristorante: RistoranteImg,
    vini: ViniImg,
    aperitivo: AperitiviImg,
  };

  const dataSezioni = Sezioni;

  return (
    <div
      className={`menu ${
        path === "ristorante" || path === "vini" || path === "aperitivo"
          ? "menu--visible"
          : ""
      }`}
    >
      <div
        className="menu__header"
        style={{
          backgroundImage: "url(" + headerImages[path] + ")",
        }}
      >
        <h1 className="section-button__name">
          {path === "ristorante"
            ? "Ristorante"
            : path === "vini"
            ? "Carta dei vini"
            : path === "aperitivo"
            ? "Aperitivo"
            : ""}
        </h1>
      </div>

      {path && (
        <ul className="menu__dropdown-list">
          {dataSezioni[path].map((item, index) => (
            <MenuDropdown
              key={item.nome}
              title={item.nome}
              index={index}
              handleClick={handleClick}
              openDropdown={openDropdown}
              content={item.contenuto}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
