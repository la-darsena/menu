import { useState } from "react";
import { HashRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import InnerPage from "./pages/InnerPage";

function App() {
  const [isEng, setIsEng] = useState(false);
  const switchLanguage = () => {
    setIsEng(!isEng);
  };

  return (
    <Router>
      <div className="container">
        <Landing isEng={isEng} handleSwitch={switchLanguage} />
        <Menu isEng={isEng} />
        <InnerPage isEng={isEng} />
      </div>
    </Router>
  );
}

export default App;
