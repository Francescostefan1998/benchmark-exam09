import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import { fetchAlbumSong } from "../redux/actions";
import { addToFavouriteAction } from "../redux/actions";
import { addToFavouriteSongs } from "../redux/actions";
import * as React from "react"

const SingleSong = ({ song, i }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(addToFavouriteSongs(song))}
      className="list-album"
      key={i}
    >
      <div className="list-left-side">
        <div>{i + 1}</div>
        <div className="flex-column">
          <div className="gettitle">{song.title}</div>
          <div>
            {song.artist.name}
            <span className="id">{song.id}</span>
          </div>
        </div>
      </div>
      <div className="time-song">
        {song.duration}
        {/*{(song.duration - (song.duration %= 60)) / 60 +
          (9 < song.duration ? ":" : ":0") +
          song.duration}*/}
      </div>
    </div>
  );
};

export default SingleSong;
