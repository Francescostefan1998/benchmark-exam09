import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
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
import { fetchAlbumSong, fetchHomeSong } from "./redux/actions";

import { Song } from "./types/Song";
interface mysong {
  song: Song[]
}
function App (props: mysong){
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
        <div>
          <Routes>
          <Route   
            path="/"
            element={<HomePage fetchAlbumS={fetchAlbumSong}/>}
          />
          <Route
            path="/albumpage/:albumId"
            element={ <AlbumPage album={thissong} fetchHomeS={fetchHomeSong}  fetchAlbumS={fetchAlbumSong} listsong={props.song} album1={thissong}/>}
          />
          <Route
            path="/artistpage/:artistId"
            element={<ArtistPage />}
          /></Routes>
          <Player />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;