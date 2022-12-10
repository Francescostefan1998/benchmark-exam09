import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MySidebar from "./MySidebar";
import { fetchAlbumSong } from "../redux/actions";
import { changecolor } from "../redux/actions";
import SingleSong from "./SingleSong";
const AlbumPage = () => {
  const dispatch = useDispatch();
  /* const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(changecolor(e));
  }; */

  useEffect(() => {
    dispatch(fetchAlbumSong("metallica"));
    console.log("useeffect triggered");
  }, []);
  const listsong = useSelector((store) => store.album.content);
  return (
    <div className="main">
      <MySidebar />
      <div className="innerMain">
        <MyNavbar />
        <div>
          <h2>Artist</h2>
        </div>
        <div>
          <h2>Album</h2>

          {listsong.map((song, i) => (
            <SingleSong song={song} key={i} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
