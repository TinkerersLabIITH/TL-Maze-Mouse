import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import WellDone from './pages/WellDone';
import Promotion from './pages/Promotion';
import LeaderBoard from './pages/Leaderboard';
import LandingPage from './pages/LandingPage';
import Instructions from './pages/Instructions';
import Dashboard from './pages/Dashboard';
import Playpage from './pages/Playpage';
import Game from './pages/Game';
import DesktopPage from './pages/DesktopPage';

function App() {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  const isDesktop = windowSize[0] > 800;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Router>
      {isDesktop ? (
        <DesktopPage />
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/playpage" element={<Playpage />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/game" element={<Game />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/welldone" element={<WellDone />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
