import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import MySidebar from "./components/MySidebar";
import Player from "./components/Player";

function App() {
  return (
    <div id="biggestMain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/albumpage/:albumId" element={<AlbumPage />} />
          <Route path="/artistpage/:artistId" element={<ArtistPage />} />
        </Routes>
        <Player />
      </BrowserRouter>
    </div>
  );
}

export default App;
