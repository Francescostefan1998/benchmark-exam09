import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Dispatch } from "react";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import MySidebar from "./components/MySidebar";
import Player from "./components/Player";
import { store } from "./redux/store";
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

const mapAppStateToProps = (state: ReduxStore) => state

const mapAppDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query))
});

class App extends Component{
 
state = {
  albumSelected: null,
  thissong: null,
song: []
}

render(){
  return (
    <div id="biggestMain">
      <BrowserRouter>
        <div>
          <Routes>
          <Route   
            path="/" 
            element={<HomePage album={this.state.albumSelected} listAlbum={this.state.song}/>}
          />
          <Route
            path="/albumpage/:albumId" 
            element={ <AlbumPage />}
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
}}

export default connect(mapAppStateToProps, mapAppDispatchToProps)(App);