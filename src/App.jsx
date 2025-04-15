import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import TestPage from "./components/TestPage";
import GameApp from "./game/GameApp";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<GameApp/>} />
    </Routes>
  </Router>
  );
}

export default App;
