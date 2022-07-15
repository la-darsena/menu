import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Landing />
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
