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
import Info from "../components/Info";

import smoothscroll from "smoothscroll-polyfill";

function Menu({ isEng }) {
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

  useEffect(() => {
    setOpenDropdown(-1);
  }, [location]);

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

  const dataSezioni = Sezioni[!isEng ? "ita" : "eng"];

  return (
    <div
      className={`menu ${
        path === "ristorante-pranzo" ||
        path === "ristorante-cena" ||
        path === "vini" ||
        path === "aperitivo"
          ? "menu--visible"
          : ""
      }`}>
      <div
        className="menu__header"
        style={{
          backgroundImage: "url(" + headerImages[path] + ")",
        }}>
        <button
          className="button button--round"
          style={{ backgroundImage: "url(" + BackIcon + ")" }}
          onClick={() => {
            navigate(-1);
            handleClick(-1);
          }}></button>
        <h1 className="section-button__name">
          {path === "ristorante-cena" || path === "ristorante-pranzo"
            ? !isEng
              ? "Ristorante"
              : "Restaurant"
            : path === "vini"
            ? !isEng
              ? "Carta dei vini"
              : "WineList"
            : path === "aperitivo"
            ? !isEng
              ? "Aperitivo cenato"
              : "Aperitif"
            : ""}
        </h1>
      </div>

      {path && path !== "pranzo" && path !== "cena" && (
        <ul className="menu__dropdown-list">
          {dataSezioni[path].map((item, index) =>
            item.info ? (
              <div className="u_margin-bottom-l" key={item.info}>
                <Info title={item.info} />
              </div>
            ) : (
              <MenuDropdown
                key={item.nome}
                title={item.nome}
                index={index}
                handleClick={handleClick}
                openDropdown={openDropdown}
                content={item.contenuto}
              />
            )
          )}
          {path === "ristorante-cena" && (
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
        }}>
        &uarr;
      </button>
      <div className="menu__allergeni-button-container">
        <button
          className="button--secondary"
          onClick={() => {
            setModalOpen(true);
          }}>
          {!isEng ? "Carta degli allergeni" : "Allergens chart"}
        </button>
      </div>

      <AllergeniList
        isOpen={isModalOpen}
        closeList={() => {
          setModalOpen(false);
        }}
        isEng={isEng}
      />
    </div>
  );
}

export default Menu;
