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
  const navigate = useNavigate();
  console.log(album.album.id);
  console.log(i);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchAlbumSong(album.album.id));
    console.log(e);
    navigate("/albumpage/:albumId");
  };
  return (
    <div className="col-md-2" onClick={handleSubmit}>
      <div className="big-card album">
        <img src={album.album.cover} alt={album.title} />
        <h4>{album.title}</h4>
        <h5>Album</h5>
        <div className="time-song">
          {/*  {(album.duration - (album.duration %= 60)) / 60 +
            (9 < album.duration ? ":" : ":0") +
            album.duration}*/}
        </div>
      </div>
    </div>
  );
};

export default SingleAlbum;
