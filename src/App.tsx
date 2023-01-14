import { BrowserRouter , Routes, Route, Link, LinkProps } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Dispatch } from "react";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import MySidebar from "./components/MySidebar";
import Player from "./components/Player";
import { MapDispatchToProps, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ReduxStore } from "./types/ReduxStore";
import { Album } from "./types/Album";
import { fetchAlbumSong, fetchHomeSong } from "./redux/actions";
import { Component } from "react";
import { Song } from "./types/Song";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { connect } from "react-redux";


const App = () => {


  return (
    <div id="biggestMain">
      <BrowserRouter>
        <div>
          <Routes>
          <Route   
            path="/" 
            
            element={<HomePage/>}
          />
          <Route
            path="/albumpage/:albumId"  
            
            element={<AlbumPage/>}
          />
          <Route
            path="/artistpage/:artistId" 
            
            element={<ArtistPage/>}
          /></Routes>
          <Player />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;