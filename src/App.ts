import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import MySidebar from "./components/MySidebar";
import Player from "./components/Player";
import { store } from "./redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { ReduxStore } from "./types/ReduxStore";
import { Album } from "./types/Album";
function App() {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState<Album | null>();
  console.log(store);
  const thissong = useSelector((store: ReduxStore) => store.selected);
  console.log(thissong);
  useEffect(() => {
    setRefresh(thissong);
  }, [thissong]);

  return (
    <div id="biggestMain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/albumpage/:albumId"
            element={<AlbumPage album={thissong} />}
          />
          <Route path="/artistpage/:artistId" element={<ArtistPage />} />
        </Routes>
        <Player />
      </BrowserRouter>
    </div>
  );
}

export default App;
