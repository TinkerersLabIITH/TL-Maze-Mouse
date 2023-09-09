import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import WellDone from "./pages/WellDone";
import Promotion from "./pages/Promotion";
import LeaderBoard from "./pages/Leaderboard";
import LandingPage from "./pages/LandingPage";
import Instructions from "./pages/Instructions";
import Dashboard from "./pages/Dashboard";
import Playpage from "./pages/Playpage";
import Game from "./pages/Game2";
// import Canvas from "./pages/script";
import DesktopPage from "./pages/DesktopPage";

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  
  return windowSize[0] > 800 ? (
    <DesktopPage />
    // <LeaderBoard/>
  ) : (
    <HashRouter basename='/TL-Maze-Mouse' >
      <Routes>
        <Route path="/" component={LandingPage} />
        <Route path="/playpage" component={Playpage} />
        <Route path="/Instructions" component={Instructions} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/game" component={Game} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/promotion" component={Promotion} />
        <Route path="/welldone" component={WellDone} />
      </Routes>
    </HashRouter>
  );
}

export default App;
