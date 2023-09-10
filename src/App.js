import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import WellDone from "./pages/WellDone";
import Promotion from "./pages/Promotion";
import LeaderBoard from "./pages/Leaderboard";
import LandingPage from "./pages/LandingPage";
import Instructions from "./pages/Instructions";
import Dashboard from "./pages/Dashboard";
import Playpage from "./pages/Playpage";
import Game from "./pages/Game";
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
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/playpage", element: <Playpage /> },
    { path: "/Instructions", element: <Instructions /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/game", element: <Game /> },
    { path: "/leaderboard", element: <LeaderBoard /> },
    { path: "/promotion", element: <Promotion /> },
    { path: "/welldone", element: <WellDone /> },
  ]);
  return windowSize[0] > 800 ? (
    <DesktopPage />
  ) : (
    <RouterProvider router={router} />
  );
}

export default App;
