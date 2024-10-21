/** @format */
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Mine = lazy(() => import("./pages/Mine"));
const Earn = lazy(() => import("./pages/Earn"));
const Ranks = lazy(() => import("./pages/Ranks"));
const Start = lazy(() => import("./pages/Start"));
const Airdrop = lazy(() => import("./pages/Airdrop"));
const Friends = lazy(() => import("./pages/Friends"));
const Booster = lazy(() => import("./pages/Booster"));
const Spin = lazy(() => import("./pages/Spin"));
const MiniGameMenu = lazy(() => import("./pages/MiniGamesMenu"));
const SnakeGame = lazy(() => import("./pages/SnakeGame"));
const DailyNFT = lazy(() => import("./pages/DailyNFT"));

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     const message = "Are you sure you want to leave?";
  //     event.returnValue = message; // This shows the confirmation dialog
  //     return message;
  //   };

  //   const handleUnload = () => {
  //     // Use replaceState to avoid adding to the history stack
  //     window.history.replaceState(null, "", "/");
  //     navigate("/");
  //   };

  //   // Add event listeners
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   window.addEventListener("unload", handleUnload);

  //   // Clean up event listeners on component unmount
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //     window.removeEventListener("unload", handleUnload);
  //   };
  // }, [navigate]);

  return (
    <Routes>
      <Route index path="/" element={<Start />} />
      <Route path="/play" element={<Home />} />
      <Route path="/mine" element={<Mine />} />
      <Route path="/rank" element={<Ranks />} />
      <Route path="/earn" element={<Earn />} />
      <Route path="/airdrop" element={<Airdrop />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/booster" element={<Booster />} />
      <Route path="/spin" element={<Spin />} />
      <Route path="/gameMenu" element={<MiniGameMenu />} />
      <Route path="/snake-game" element={<SnakeGame />} />
      <Route path="/daily-nft" element={<DailyNFT />} />
    </Routes>
  );
}
export default App;
