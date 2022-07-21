import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RistorantePranzoImg from "../assets/images/ristorante-pranzo.webp";
import RistoranteCenaImg from "../assets/images/ristorante-cena.webp";
import ViniImg from "../assets/images/vini.webp";
import AperitiviImg from "../assets/images/aperitivi.webp";
import MenuDropdown from "../components/MenuDropdown";
import Sezioni from "../dataSezioni";
import BackIcon from "../assets/icons/back_arrow.svg";
import Sottosezione from "../components/Sottosezione";
import AllergeniList from "../components/AllergeniList";

import smoothscroll from "smoothscroll-polyfill";

function Menu() {
  smoothscroll.polyfill();
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [upButtonVisible, setUpButtonVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const path = location.pathname.replace("/", "");

  const onScroll = () => {
    if (window.scrollY >= window.innerHeight * 0.75) {
      setUpButtonVisible(true);
    } else {
      setUpButtonVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [upButtonVisible]);

  const handleClick = (e, index) => {
    //e.target.scrollIntoView({ behavior: "smooth" });
    if (index !== openDropdown) {
      setOpenDropdown(index);
    } else {
      setOpenDropdown(-1);
    }
  };

  const headerImages = {
    "ristorante-cena": RistoranteCenaImg,
    "ristorante-pranzo": RistorantePranzoImg,
    vini: ViniImg,
    aperitivo: AperitiviImg,
  };

  const dataSezioni = Sezioni;

  return (
    <div
      className={`menu ${
        path === "ristorante-pranzo" ||
        path === "ristorante-cena" ||
        path === "vini" ||
        path === "aperitivo"
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
        <button
          className="button button--round"
          style={{ backgroundImage: "url(" + BackIcon + ")" }}
          onClick={() => {
            handleClick(-1);
            navigate(-1);
          }}
        ></button>
        <h1 className="section-button__name">
          {path === "ristorante-cena" || path === "ristorante-pranzo"
            ? "Ristorante"
            : path === "vini"
            ? "Carta dei vini"
            : path === "aperitivo"
            ? "Aperitivo cenato"
            : ""}
        </h1>
      </div>

      {path && path !== "pranzo" && path !== "cena" && (
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
          {path === "ristorante" && (
            <div className="u_margin-top-l">
              <Sottosezione title={"Coperto 2€"} />
            </div>
          )}
        </ul>
      )}
      <button
        className={`button button--round button--up ${
          upButtonVisible ? "button--up--visible" : ""
        }`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        &uarr;
      </button>
      <div className="menu__allergeni-button-container">
        <button
          className="button--secondary"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Carta degli allergeni
        </button>
      </div>

      <AllergeniList
        isOpen={isModalOpen}
        closeList={() => {
          setModalOpen(false);
        }}
      />
    </div>
  );
}

export default Menu;
