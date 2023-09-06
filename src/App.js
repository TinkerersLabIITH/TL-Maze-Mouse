import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WellDone from "./pages/WellDone";
import Promotion from "./pages/Promotion";
import LeaderBoard from "./pages/Leaderboard";
import LandingPage from "./pages/LandingPage";
import Instructions from "./pages/Instructions";
import Dashboard from "./pages/Dashboard";
import Playpage from "./pages/Playpage";
import Game from "./pages/Game";

function App() {
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
  return <RouterProvider router={router} />;
}

export default App;
