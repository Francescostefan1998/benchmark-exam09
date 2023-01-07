import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import { fetchAlbumSong } from "../redux/actions";
import { addToFavouriteAction } from "../redux/actions";
import { fetchHomeSong } from "../redux/actions";
import * as React from "react"
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { Album } from "../types/Album";
import { AlbumSmall } from "../types/AlbumSmall";
type mySingleAlbumProps = {
  fetchAlbumS: (query: string | any) => void
  album: Album
  i: number
  key: number
}

const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  fetchAlbumS: (query: string) => dispatch(fetchAlbumSong(query))
});



const SingleAlbum = (props: mySingleAlbumProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(props.album.album.id);
  console.log(props.i);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    props.fetchAlbumS(props.album.album.id);
    console.log(e);
    navigate("/albumpage/:albumId");
  };
  return (
    <div className="col-md-2" onClick={handleSubmit}>
      <div className="big-card album">
        <img src={props.album.album.cover} alt={props.album.title} />
        <h4>{props.album.title}</h4>
        <h5>Album</h5>
        <div className="time-song">
          {props.album.duration}
          {/*  {(album.duration - (album.duration %= 60)) / 60 +
            (9 < album.duration ? ":" : ":0") +
            album.duration}*/}
        </div>
      </div>
    </div>
  );
};

export default SingleAlbum;
