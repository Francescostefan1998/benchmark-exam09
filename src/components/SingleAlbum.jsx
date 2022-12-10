import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import { fetchAlbumSong } from "../redux/actions";
import { addToFavouriteAction } from "../redux/actions";
import { fetchHomeSong } from "../redux/actions";
const SingleAlbum = ({ album, i }) => {
  const dispatch = useDispatch();
  return (
    <div className="list-album" key={i}>
      <div className="list-left-side">
        <div>{i + 1}</div>
        <div className="flex-column">
          <div className="gettitle">{album.title}</div>
          <div>
            {album.artist.name}
            <span className="id">{album.id}</span>
          </div>
        </div>
      </div>
      <div className="time-song">
        {(album.duration - (album.duration %= 60)) / 60 +
          (9 < album.duration ? ":" : ":0") +
          album.duration}
      </div>
    </div>
  );
};

export default SingleAlbum;
