import VideoIntro from "../assets/intro.mp4";
import { ReactComponent as Logo } from "../assets/logo.svg";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SectionButton from "../components/SectionButton";
import Header from "../components/Header";

import CenaImg from "../assets/images/cena.webp";
import PranzoImg from "../assets/images/pranzo.webp";
import AperitiviImg from "../assets/images/aperitivi.webp";
import AllergeniList from "../components/AllergeniList";

function Landing() {
  const location = useLocation();
  const [isIntroEnded, setIntroEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const Sections = [
    {
      ita: "Menù pranzo",
      eng: "Restaurant",
      image: PranzoImg,
      link: "pranzo",
    },
    { ita: "Menù cena", eng: "Dinner menù", image: CenaImg, link: "cena" },
    {
      ita: "Aperitivo cenato",
      eng: "Aperitif",
      image: AperitiviImg,
      link: "aperitivo",
    },
  ];

  return (
    <div
      className={`landing__container ${
        location.pathname !== "/" ? "landing__container--hidden" : ""
      }`}
    >
      <Header />
      {isIntroEnded && (
        <>
          <div className="sections-container">
            {Sections.map((item, index) => (
              <SectionButton
                name={item.ita}
                image={item.image}
                link={item.link}
                index={index}
              />
            ))}
          </div>
        </>
      )}
      {!isIntroEnded && (
        <div className={"video-container"}>
          <video
            autoPlay
            muted
            playsInline
            onPlay={() => {
              setIsLoaded(true);
              setTimeout(() => {
                setIntroEnded(true);
              }, 1900);
            }}
            className={`${isLoaded ? "video-container--animated" : ""}`}
          >
            <source src={VideoIntro} type="video/mp4" />
          </video>
          <div className="header__logo-box header__logo-box--animated">
            <Logo className="header__logo" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
