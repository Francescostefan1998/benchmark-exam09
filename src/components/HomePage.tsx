/*import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import { fetchHomeSong } from "../redux/actions";
import SingleAlbum from "./SingleAlbum";
import { ReduxStore } from "../types/ReduxStore";
import { ThunkDispatch } from "redux-thunk";
import { fetchAlbumSong } from "../redux/actions";

type myNavbarProps = {
  fetchHomeS: (query: string) => void
}

const mapdispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query))
});



type HomePageProps = {
  fetchAlbumS: () => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: () => dispatch(fetchAlbumSong("metallica"))
});

const HomePage = (props: HomePageProps) => {
  useEffect(() => {
    props.fetchAlbumS();
    console.log("useeffect triggered");
  }, []);
  const listalbum = useSelector((store: ReduxStore) => store.search);

  return (
    <div className="main">
      <MySidebar />
      <div className="innerMain">
        <MyNavbar {...myNavbarProps}/>
        <div>
          {listalbum && (
            <div className="row">
              <div className="col-12">
                <h4>Albums</h4>
                <div className="row" id="albums">
                  {listalbum.map((album, i) => (
                    <SingleAlbum album={album} key={i} i={i} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;


 import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import { fetchHomeSong } from "../redux/actions";
import SingleAlbum from "./SingleAlbum";
import * as React from "react"
import { ReduxStore } from "../types/ReduxStore";
import { ThunkDispatch } from "redux-thunk";
import { fetchAlbumSong } from "../redux/actions";
import { Action } from "@reduxjs/toolkit";
const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: () => dispatch(fetchAlbumSong("metallica"))
})
interface HomePageProps {
  fetchAlbumS: () => void
}

const HomePage = (<HomePageProps>) => {
  const dispatch = useDispatch();
  useEffect(() => {
    this.props.fetchAlbumS());
    console.log("useeffect triggered");
  }, []);
  const listalbum = useSelector((store: ReduxStore) => store.search);

  return (
    <div className="main">
      <MySidebar />
      <div className="innerMain">
        <MyNavbar />
        <div>
          {listalbum && (
            <div className="row">
              <div className="col-12">
                <h4>Albums</h4>
                <div className="row" id="albums">
                  {listalbum.map((album, i) => (
                    <SingleAlbum album={album} key={i} i={i} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage; */

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import SingleAlbum from "./SingleAlbum";
import { fetchHomeSong, fetchAlbumSong } from "../redux/actions";
import { ReduxStore } from "../types/ReduxStore";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import * as React from "react"

type myNavbarProps = {
  fetchHomeS: (query: string) => void;
};

type HomePageProps = {
  fetchAlbumS: (argument: string) => void;
};

const mapdispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchHomeS: (query: string) => dispatch(fetchHomeSong(query)),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: (argument: string) => dispatch(fetchAlbumSong("metallica")),
});

const HomePage = (props: HomePageProps) => {
  const dispatch = useDispatch();
  const listalbum = useSelector((store: ReduxStore) => store.search);

  useEffect(() => {
    props.fetchAlbumS("metallica");
    console.log("useeffect triggered");
  }, []);

  return (
    <div className="main">
      <MySidebar />
      <div className="innerMain">
        <MyNavbar {...mapdispatchToProps(dispatch)} />
        <div>
          {listalbum && (
            <div className="row">
              <div className="col-12">
                <h4>Albums</h4>
                <div className="row" id="albums">
                  {listalbum.map((album, i) => (
                    <SingleAlbum album={album} key={i} i={i} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
