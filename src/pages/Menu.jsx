import React from "react";
import { useLocation } from "react-router-dom";
import RistoranteImg from "../assets/images/ristorante.webp";
import ViniImg from "../assets/images/vini.webp";
import AperitiviImg from "../assets/images/aperitivi.webp";
import MenuDropdown from "../components/MenuDropdown";

function Menu() {
  const location = useLocation();
  const headerImages = {
    "/ristorante": RistoranteImg,
    "/vini": ViniImg,
    "/aperitivo": AperitiviImg,
  };

  const menuEntries = {
    "/ristorante": [
      "menù degustazione",
      "antipasti",
      "primi piatti",
      "secondi piatti",
      "dessert",
      "bevande",
    ],
    "/vini": [],
    "/aperitivo": [],
    "/": [],
  };

  return (
    <div
      className={`menu ${
        location.pathname === "/ristorante" ||
        location.pathname === "/vini" ||
        location.pathname === "/aperitivo"
          ? "menu--visible"
          : ""
      }`}
    >
      <div
        className="menu__header"
        style={{
          backgroundImage: "url(" + headerImages[location.pathname] + ")",
        }}
      >
        <div className="section-button__name">
          {location.pathname === "/ristorante"
            ? "Ristorante"
            : location.pathname === "/vini"
            ? "Carta dei vini"
            : location.pathname === "/aperitivo"
            ? "Aperitivo"
            : ""}
        </div>
      </div>
      <ul className="menu__dropdown-list">
        {menuEntries[location.pathname].map((item) => (
          <MenuDropdown title={item} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
