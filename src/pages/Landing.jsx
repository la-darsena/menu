import VideoIntro from "../assets/intro.mp4";
import { ReactComponent as Logo } from "../assets/logo.svg";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SectionButton from "../components/SectionButton";
import Header from "../components/Header";

import CenaImg from "../assets/images/cena.webp";
import PranzoImg from "../assets/images/pranzo.webp";
import AperitiviImg from "../assets/images/aperitivi.webp";

function Landing({ isEng, handleSwitch }) {
  const location = useLocation();
  const [isIntroEnded, setIntroEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [landingVisible, setLandingVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const Sections = [
    {
      ita: "Menù pranzo",
      eng: "Lunch menu",
      image: PranzoImg,
      link: "pranzo",
    },
    { ita: "Menù cena", eng: "Dinner menu", image: CenaImg, link: "cena" },
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
      }`}>
      <Header animated={isLoaded} handleSwitch={handleSwitch} isEng={isEng} />
      <>
        <div className="sections-container">
          {Sections.map((item, index) => (
            <SectionButton
              name={!isEng ? item.ita : item.eng}
              image={item.image}
              link={item.link}
              index={index}
              animated={landingVisible}
            />
          ))}
        </div>
      </>

      <div
        className={`video-container ${
          isIntroEnded ? "video-container--hidden" : ""
        }`}>
        <video
          autoPlay
          muted
          playsInline
          onPlay={() => {
            setIsLoaded(true);
            setTimeout(() => {
              setLandingVisible(true);
            }, 1800);
          }}
          onAnimationEnd={() => {
            setIntroEnded(true);
          }}
          className={`video-container--animated ${
            isLoaded ? "video-container--animated--started" : ""
          }`}>
          <source src={VideoIntro} type="video/mp4" />
        </video>
        <div
          className={`header__logo-box header__logo-box--animated ${
            isLoaded ? "header__logo-box--animated--started" : ""
          }`}>
          <Logo className="header__logo" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
