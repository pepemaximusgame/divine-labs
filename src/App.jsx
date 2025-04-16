import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import TestPage from "./components/TestPage";
import GameApp from "./game/GameApp";
import AppHome from "./mainpage/AppHome";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/game" element={<GameApp/>} />
      <Route path="/home" element={<AppHome/>} />
    </Routes>
  </Router>
  );
}

export default App;
