import { useState } from "react";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as ItaIcon } from "../assets/icons/ita.svg";
import { ReactComponent as EngIcon } from "../assets/icons/eng.svg";

function Header({ animated }) {
  const [isEng, setIsEng] = useState(false);

  const toggleLanguage = () => {
    setIsEng(!isEng);
  };

  return (
    <header className="header">
      <div className="header__switch-container">
        <button className="switch" onClick={toggleLanguage}>
          <div
            className={`switch__circle ${isEng ? "switch__circle--right" : ""}`}
          ></div>
          <div
            className={`switch__icon-box ${
              isEng ? "switch__icon-box--disabled" : ""
            }`}
          >
            <ItaIcon className="switch__icon" />
          </div>
          <div
            className={`switch__icon-box ${
              !isEng ? "switch__icon-box--disabled" : ""
            }`}
          >
            <EngIcon className="switch__icon" />
          </div>
        </button>
      </div>
      <div
        className={`header__logo-box ${
          animated ? "header__logo-box--appearing" : ""
        }`}
      >
        <Logo className="header__logo" />
      </div>
    </header>
  );
}

export default Header;
