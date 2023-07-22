import { useLocation, useNavigate } from "react-router-dom";
import SectionButton from "../components/SectionButton";
import RistorantePranzoImg from "../assets/images/ristorante-pranzo.webp";
import RistoranteCenaImg from "../assets/images/ristorante-cena.webp";
import ViniImg from "../assets/images/vini.webp";
import CenaImg from "../assets/images/cena.webp";
import PranzoImg from "../assets/images/pranzo.webp";
import BackIcon from "../assets/icons/back_arrow.svg";

function InnerPage({ isEng }) {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const navigate = useNavigate();

  const images = {
    "ristorante-pranzo": RistorantePranzoImg,
    "ristorante-cena": RistoranteCenaImg,
  };

  const Sections = [
    {
      ita: "Ristorante",
      eng: "Restaurant",
      image: images["ristorante-" + path],
      link: "ristorante-" + path,
    },
    { ita: "Carta dei vini", eng: "Wine list", image: ViniImg, link: "vini" },
  ];

  const headerImages = {
    pranzo: PranzoImg,
    cena: CenaImg,
  };

  return (
    <div
      className={`innerpage ${
        path === "pranzo" || path === "cena" ? "innerpage--visible" : ""
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
          }}></button>
        <h1 className="section-button__name">
          {path === "cena"
            ? !isEng
              ? "Menù cena"
              : "Dinner menu"
            : path === "pranzo"
            ? !isEng
              ? "Menù pranzo"
              : "Lunch menu"
            : ""}
        </h1>
      </div>
      {(path === "pranzo" || path === "cena") && (
        <div className="container">
          <div className="sections-container">
            {Sections.map((item, index) => (
              <SectionButton
                name={!isEng ? item.ita : item.eng}
                image={item.image}
                link={item.link}
                index={index}
                animated={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default InnerPage;
