import { HashRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import InnerPage from "./pages/InnerPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Landing />
        <Menu />
        <InnerPage />
      </div>
    </Router>
  );
}

export default App;
